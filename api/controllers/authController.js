const express = require('express');
const router = express.Router();
const Sanitizer = require('../utils/sanitizer');
const Validator = require('../utils/validator');
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const TokenGenerator = require('../utils/tokenGenerator');
const Encryptor = require('../utils/encryptor');
const Log = require('../models/logModel');
const {LogErrors, DBErrors, SystemErrors} = require('../utils/constants');
const IDGenerator = require('../utils/idGenerator');


router.post('/create-user', async (req, res) => {

	// GET SUBMITTED INFO
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPassword = Sanitizer.sanitizeText(req.body.password);
	const submittedDisplayName = Sanitizer.sanitizeText(req.body.displayName);

	// VALIDATE INPUT
	if (
		!Validator.validateEmail(submittedEmail) ||
		!Validator.validateText(submittedPassword) ||
		!Validator.validateText(submittedDisplayName)
	) return APIResponse.Error(res, "Valid Email, Password, and Display Name are required", "Valid Email, Password, and Display Name are required");

	// CHECK FOR EXSISTING EMAIL
	const exsistingEmail = await User.getWhere('email', submittedEmail);
	if (exsistingEmail) return APIResponse.Error(res, "Email already exists", "Email already exists");

	// GENERATE UNIQUE USER ID
	let unique = false;
	let generatedId = "";
	while (!unique) {
		generatedId = await IDGenerator.generateUserId(25);
		if (!await User.getWhere('id', generatedId)) {
			unique = true;
		}
	}

	// ENCRYPT SUBMITTED PASSWORD
	const encryptedPassword = await Encryptor.encrypt(submittedPassword);
	if (!encryptedPassword) {
		await Log.event(SystemErrors.SYSTEM_ENCRYPTOR_ERROR, "Failed to encrypt password while creating user.", submittedEmail);
		return APIResponse.Error(res, "System Error. Can't encrypt password", "Error. Please try again.");
	}

	// SAVE USER
	const savedUser = await User.create(generatedId, submittedEmail, encryptedPassword, submittedDisplayName);
	if (!savedUser) {
		await Log.event(DBErrors.DB_SET_NEW_USER_ERROR, "Could not save new user to DB.", submittedEmail);
		return APIResponse.Error(res, "System Error. Could not save new user to DB.", "Error. Please try again.");
	}


	return APIResponse.Success(res, "Successfully added user.");

});


router.post('/reset-token', async (req, res) => {

	// GET SUBMITTED EMAIL
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);

	// VALIDATE INPUT
	if (!Validator.validateEmail(submittedEmail)) return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid" +
		" Credentials.");

	// CHECK IF EMAIL EXSISTS
	let validEmailCheck = await User.getField(submittedEmail, 'email');
	if (!validEmailCheck) {
		await Log.event(LogErrors.INVALID_AUTH_USER, `No such email ${submittedEmail} at Reset Token Request`);
		return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid Credentials.");
	}

	// GENERATE RESET TOKEN
	const generatedToken = await TokenGenerator.generateResetToken(submittedEmail);
	if (!generatedToken) {
		await Log.event(SystemErrors.SYSTEM_TOKEN_GENERATOR_ERROR, `Token Generation Error on Request Reset Token`, submittedEmail);
		return APIResponse.Error(res, "Error generating the reset token -- /reset-token controller", "Invalid Credentials");
	}

	// SET RESET TOKEN
	const setTokenResult = await User.setField(submittedEmail, 'resetToken', generatedToken);
	if (!setTokenResult) {
		await Log.event(DBErrors.DB_SET_RESET_TOKEN_ERROR, `Couldn't set reset token to DB`, submittedEmail);
		return APIResponse.Error(res, "Error setting reset token to user in DB -- /reset-token controller.", "Invalid Credentials");
	}

	/*
		SEND EMAIL WITH RESET TOKEN
	 */

	return APIResponse.Success(res, "Successfully generated reset token.", {token: generatedToken});

});


router.post('/reset-password', async (req, res) => {

	// GET SUBMITTED CREDENTIALS
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPassword = Sanitizer.sanitizeText(req.body.password);
	const submittedToken = Sanitizer.sanitizeText(req.body.token);

	// VALIDATE AND RETRIEVE EMAIL FROM RESET TOKEN
	const decodedToken = await TokenGenerator.validateResetToken(req.body.token);
	if (!decodedToken) {
		await Log.event(LogErrors.INVALID_RESET_TOKEN, `Invalid Reset Token`, submittedEmail);
		return APIResponse.Error(res, "Invalid reset token supplied -- /ResetTokenValidator Middleware. ", "Invalid Credentials.");
	}
	const extractedEmailFromToken = Sanitizer.sanitizeText(decodedToken.email);

	// VALIDATE INPUTS AND COMPARE SUBMITTED EMAIL WITH TOKEN EMAIL
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword) || !Validator.validateEmail(extractedEmailFromToken)) return APIResponse.Error(res, "Invalid email, password or token -- /reset-password controller.", "Error: Valid Email and Password are Required.");
	if (submittedEmail !== extractedEmailFromToken) {
		await Log.event(LogErrors.EMAIL_AND_TOKEN_EMAIL_MISMATCH, "Email and Token Email Mismatch on change password.", submittedEmail);
		return APIResponse.Error(res, "Token email does not match the submitted email -- /reset-password", "Invalid Credentials");
	}

	// CHECK TOKEN VALIDITY AGAINST STORED TOKEN
	const userToken = await User.getField(submittedEmail, 'resetToken');
	if (userToken !== submittedToken) {
		await Log.event(LogErrors.TOKEN_AND_STORED_TOKEN_MISMATCH, "Reset token does not match supplied token.", submittedEmail);
		return APIResponse.Error(res, "Reset Tokens don't match -- /reset-password controller.", "Invalid Credentials.");
	}

	// ENCRYPT NEW PASSWORD
	const encryptedPassword = await Encryptor.encrypt(submittedPassword);
	if (!encryptedPassword) {
		await Log.event(SystemErrors.SYSTEM_ENCRYPTOR_ERROR, "Encryptor error. Could not generate.", submittedEmail);
		return APIResponse.Error(res, "Could not encrypt new password -- /reset-password controller.", "Invalid Credentials");
	}

	// CHANGE PASSWORD
	const updateResult = await User.setField(submittedEmail, 'password', encryptedPassword);
	if (!updateResult) {
		await Log.event(DBErrors.DB_SET_NEW_PASSWORD_ERROR, "Could not change ");
		return APIResponse.Error(res, "DB Error cannot change password -- /reset-password controller.", "Invalid Credentials.");
	}

	// INVALIDATE RESET TOKEN
	const invalidationResult = await User.setField(submittedEmail, 'resetToken', null);
	if (!invalidationResult) {
		await Log.event(DBErrors.DB_INVALIDATE_RESET_TOKEN_ERROR, "Could not invalidate reset token", submittedEmail);
		return APIResponse.Error(res, "DB Error invalidating old reset token -- /reset-password controller.", "Invalid Credentials.");
	}

	return APIResponse.Success(res, "Successfully changed password.");

});

module.exports = router;
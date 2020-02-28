const express = require('express');
const router = express.Router();
const Sanitizer = require('../utils/sanitizer');
const Validator = require('../utils/validator');
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const TokenGenerator = require('../utils/tokenGenerator');
const Encryptor = require('../utils/encryptor');


router.post('/login', async (req, res) => {

	// SANITIZE INPUTS
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPassword = Sanitizer.sanitizeText(req.body.password);

	// VALIDATE INPUTS
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword)) APIResponse.Error(res, "Invalid Username or" +
		" Password Submitted -- /login controller.", "Invalid Credentials");

	// CHECK IF USER EXISTS BY RETRIEVING THE PASSWORD
	const storedPassword = await User.getPassword(submittedEmail);
	if (!storedPassword) return APIResponse.Error(res, "Error No user by that email in the DB -- /login controller.", "Invalid Credentials.");

	// COMPARE PASSWORDS
	const passwordCompare = await Encryptor.validate(submittedPassword, storedPassword);
	if (!passwordCompare) return APIResponse.Error(res, "Invalid Password Submitted", "Invalid Credentials.");

	// GENERATE LOGIN TOKEN
	const token = await TokenGenerator.generateAuthToken(submittedEmail);
	if (!token) return APIResponse.Error(res, "Could not generate login token", "Invalid Credentials.");

	return APIResponse.Success(res, "Successful Login Attempt.", {user: token});

});


router.post('/reset-token', async (req, res) => {

	// GET SUBMITTED EMAIL
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);

	// VALIDATE INPUT
	if (!Validator.validateEmail(submittedEmail)) return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid" +
		" Credentials.");

	// CHECK IF EMAIL EXSISTS
	let validEmailCheck = await User.emailExists(submittedEmail);
	if (!validEmailCheck) return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid Credentials.");

	// GENERATE RESET TOKEN
	const generatedToken = await TokenGenerator.generateResetToken(submittedEmail);
	if (!generatedToken) return APIResponse.Error(res, "Error generating the reset token -- /reset-token controller", "Invalid Credentials");

	// SET RESET TOKEN
	const setTokenResult = await User.setResetToken(submittedEmail, generatedToken);
	if (!setTokenResult) return APIResponse.Error(res, "Error setting reset token to user in DB -- /reset-token controller.", "Invalid" +
		" Credentials");

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
	if (!decodedToken) return APIResponse.Error(res, "Invalid reset token supplied -- /ResetTokenValidator Middleware. ", "Invalid" +
		" Credentials.");
	const extractedEmailFromToken = Sanitizer.sanitizeText(decodedToken.email);

	// VALIDATE INPUTS AND COMPARE SUBMITTED EMAIL WITH TOKEN EMAIL
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword) || !Validator.validateEmail(extractedEmailFromToken)) return APIResponse.Error(res, "Invalid email, password or token -- /reset-password controller.", "Error: Valid Email and Password are Required.");
	if (submittedEmail !== extractedEmailFromToken) return APIResponse.Error(res, "Token email does not match the submitted email -- /reset-password", "Invalid" +
		" Credentials");

	// CHECK TOKEN VALIDITY AGAINST STORED TOKEN
	if (!await User.checkResetToken(submittedEmail, submittedToken)) return APIResponse.Error(res, "Reset token supplied does not match the" +
		" token generated for that user -- /reset-password controller.", "Invalid Credentials");

	// ENCRYPT NEW PASSWORD
	const encryptedPassword = await Encryptor.encrypt(submittedPassword);
	if (!encryptedPassword) return APIResponse.Error(res, "Could not encrypt new password -- /reset-password controller.", "Invalid Credentials");

	// CHANGE PASSWORD
	const updateResult = await User.changePassword(submittedEmail, encryptedPassword);
	if (!updateResult) return APIResponse.Error(res, "DB Error cannot change password -- /reset-password controller.", "Invalid Credentials.");

	// INVALIDATE RESET TOKEN
	const invalidationResult = await User.invalidateResetToken(submittedEmail, submittedToken);
	if (!invalidationResult) return APIResponse.Error(res, "DB Error invalidating old reset token -- /reset-password controller.", "Invalid" +
		" Credentials.");

	return APIResponse.Success(res, "Successfully changed password.");
});


router.post('/dev-get-temp-tokens', async (req, res) => {
	try {
		if (process.env === 'production') return APIResponse.Error(res, "Token generation error -- /dev-get-temp-tokens controller.", "Something" +
			" went wrong.");
		const authToken = await TokenGenerator.generateAuthToken(req.body.email);
		const resetToken = await TokenGenerator.generateResetToken(req.body.email);
		const brokenAuthToken = await TokenGenerator.generateAuthToken("fake@email.com");
		const brokenResetToken = await TokenGenerator.generateResetToken("fake@email.com");
		return APIResponse.Success(res, "Success!", {
			authToken: authToken,
			resetToken: resetToken,
			brokenAuthToken: brokenAuthToken,
			brokenResetToken: brokenResetToken
		});
	} catch (e) {
		return APIResponse.Error(res, "Token generation error -- /dev-get-temp-tokens controller.", "Something went wrong.")
	}
});

module.exports = router;
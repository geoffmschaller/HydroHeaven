const express = require('express');
const router = express.Router();
const Sanitizer = require('../utils/sanitizer');
const Validator = require('../utils/validator');
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const ResetTokenValidator = require('../middleware/resetPasswordTokenValidation');
const TokenGenerator = require('../utils/tokenGenerator');


router.post('/login', async (req, res) => {

	// SANITIZE INPUTS
	const submittedEmail = Sanitizer.sanitizeInput(req.body.email);
	const submittedPassword = Sanitizer.sanitizeInput(req.body.password);

	// VALIDATE INPUTS
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword)) APIResponse.Error(res, "Invalid Username or" +
		" Password Submitted -- /login controller.", "Invalid Credentials");

	// CREATE USER AND ATTEMPT LOGIN
	const loginToken = await User.login(submittedEmail, submittedPassword);
	if (loginToken === 500) return APIResponse.Error(res, "Database Error logging user in -- /login controller", "Invalid Credentials.");

	// GENERATE LOGIN TOKEN
	const token = await TokenGenerator.generateAuthToken(submittedEmail);
	if (token === 500) return APIResponse.Error(res, "Could not generate login token", "Invalid Credentials.");

	return APIResponse.Success(res, "Successful Login Attempt.", {user: token});

});


router.post('/reset-token', async (req, res) => {

	// GET SUBMITTED EMAIL
	const submittedEmail = Sanitizer.sanitizeInput(req.body.email);

	// VALIDATE INPUT
	if (!Validator.validateEmail(submittedEmail)) return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid" +
		" Credentials.");

	// CHECK IF EMAIL EXSISTS
	let emailCheck = await User.emailExists(submittedEmail);
	if (emailCheck === 500) return APIResponse.Error(res, "Invalid email supplied -- /reset-token controller.", "Invalid Credentials.");

	// GENERATE RESET TOKEN
	const token = await TokenGenerator.generateResetToken(submittedEmail);
	if (token === 500) return APIResponse.Error(res, "Error generating the reset token -- /reset-token controller", "Invalid Credentials");

	// SET RESET TOKEN
	const tokenResult = await User.setResetToken(submittedEmail, token);
	if (tokenResult === 500) return APIResponse.Error(res, "Error setting reset token to user in DB -- /reset-token controller.", "Invalid" +
		" Credentials");

	/*
		SEND EMAIL WITH RESET TOKEN
	 */

	return APIResponse.Success(res, "Successfully generated reset token.", {token: token});

});


router.post('/reset-password', ResetTokenValidator, async (req, res) => {

	// GET SUBMITTED CREDENTIALS
	const submittedEmail = Sanitizer.sanitizeInput(req.body.email);
	const submittedPassword = Sanitizer.sanitizeInput(req.body.password);
	const submittedToken = Sanitizer.sanitizeInput(req.body.token);
	const tokenEmail = Sanitizer.sanitizeInput(req.body.decodedToken.email);

	// VALIDATE INPUTS
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword) || !Validator.validateEmail(tokenEmail)) return APIResponse.Error(res, "Invalid email, password or token -- /reset-password controller.", "Error: Valid Email and Password are Required.");
	if (submittedEmail !== tokenEmail) return APIResponse.Error(res, "Token email does not match the submitted email -- /reset-password", "Invalid" +
		" Credentials");

	// CHECK TOKEN VALIDITY
	if (await User.checkResetToken(submittedEmail, submittedToken) === 500) return APIResponse.Error(res, "Reset token supplied does not match the" +
		" token generated for that user -- /reset-password controller.", "Invalid Credentials");

	// CHANGE PASSWORD
	const updateResult = await User.changePassword(submittedEmail, submittedPassword);
	if (updateResult === 500) return APIResponse.Error(res, "DB Error cannot change password -- /reset-password controller.", "Invalid Credentials.");

	// INVALIDATE RESET TOKEN
	const invalidationResult = await User.invalidateResetToken(submittedEmail, submittedToken);
	if (invalidationResult === 500) return APIResponse.Error(res, "DB Error invalidating old reset token -- /reset-password controller.", "Invalid" +
		" Credentials.");

	return APIResponse.Success(res, "Successfully changed password.");
});


router.post('/dev-get-temp-tokens', async (req, res) => {
	try {
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
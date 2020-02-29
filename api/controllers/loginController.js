const express = require('express');
const router = express.Router();
const Sanitizer = require('../utils/sanitizer');
const Validator = require('../utils/validator');
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const TokenGenerator = require('../utils/tokenGenerator');
const Encryptor = require('../utils/encryptor');
const Log = require('../models/logModel');
const {LogErrors, SystemErrors} = require('../utils/constants');


router.post('/', async (req, res) => {

	// SANITIZE INPUTS
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPassword = Sanitizer.sanitizeText(req.body.password);

	// VALIDATE INPUTS
	if (!Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedPassword)) APIResponse.Error(res, "Invalid Username or" +
		" Password Submitted -- /login controller.", "Invalid Credentials");

	// CHECK IF USER EXISTS BY RETRIEVING THE PASSWORD
	const storedPassword = await User.getField(submittedEmail, 'password');
	if (!storedPassword) {
		await Log.event(LogErrors.INVALID_AUTH_USER, `No such email ${submittedEmail} at Login`);
		return APIResponse.Error(res, "Error No user by that email in the DB -- /login controller.", "Invalid Credentials.");
	}

	// COMPARE PASSWORDS
	const passwordCompare = await Encryptor.validate(submittedPassword, storedPassword);
	if (!passwordCompare) {
		await Log.event(LogErrors.PASSWORDS_MISMATCH, `Invalid Password`, submittedEmail);
		return APIResponse.Error(res, "Invalid Password Submitted", "Invalid Credentials.");
	}

	// GENERATE LOGIN TOKEN
	const token = await TokenGenerator.generateAuthToken(submittedEmail);
	if (!token) {
		await Log.event(SystemErrors.SYSTEM_TOKEN_GENERATOR_ERROR, `Token Generation Error on Login`, submittedEmail);
		return APIResponse.Error(res, "Could not generate login token", "Invalid Credentials.");
	}

	return APIResponse.Success(res, "Successful Login Attempt.", {user: token});

});

module.exports = router;
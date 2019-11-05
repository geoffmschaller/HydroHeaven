const express = require('express');
const router = express.Router();
const APIResponses = require('../responses/responses');
const InputTypes = require('../types/inputs');
const Validator = require('../validators/validators');
const DB = require('../db/users');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {

	// RAW INPUTS
	const unsafeInputs = {
		email: {
			type: InputTypes.EMAIL_INPUT,
			value: req.body.email,
			name: "Email"
		},
		password: {
			type: InputTypes.NON_NUMERIC_TEXT_INPUT,
			value: req.body.password,
			name: "Password"
		}
	};

	// CLEAN AND VALIDATE INPUTS
	const validationResults = Validator.validateInputs(unsafeInputs);
	if (validationResults !== 200) return APIResponses.ValidationErrorResponse(res, validationResults);
	const safeInputs = Validator.cleanInputs(unsafeInputs);

	// LOG USER IN
	const loginAttemptResult = await DB.LogUserIn(safeInputs);
	if (loginAttemptResult === 500) return APIResponses.AuthorizationErrorResponse(res);
	loginAttemptResult.password = null;

	// GENERATE JWT
	const token = await jwt.sign({user: loginAttemptResult}, process.env.JWT_SECRET_KEY);

	return APIResponses.SuccessfulResponse(res, "Logged In!!", {token: token, user: loginAttemptResult});

});

router.post('/verify-token', async (req, res) => {

	// RAW INPUTS
	const token = req.body.token;

	// VERIFY TOKEN
	let tokenVerificationResult;
	try {
		tokenVerificationResult = await jwt.verify(token, process.env.JWT_SECRET_KEY);
	} catch (e) {
		return APIResponses.ValidationErrorResponse(res, "Invalid Token");
	}
	if (tokenVerificationResult === null) return APIResponses.ValidationErrorResponse(res, "Invalid Token");
	return APIResponses.SuccessfulResponse(res, "Success!", tokenVerificationResult.user);

});

module.exports = router;
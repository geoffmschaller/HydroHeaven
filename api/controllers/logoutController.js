const express = require('express');
const router = express.Router();
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const TokenGenerator = require('../utils/tokenGenerator');


router.post('/', async (req, res) => {

	// VALIDATE AUTH TOKEN
	const tokenValidation = await TokenGenerator.validateAuthToken(req.body.token);
	if (!tokenValidation) {
		return APIResponse.Error(res, "Invalid Auth Token Submitted", "Invalid Token");
	}

	// INVALIDATE TOKEN
	const invalidationResult = await User.setField(tokenValidation.email, 'loginToken', null);
	if (!invalidationResult) {
		return APIResponse.Error(res, "Unable to Invalidate Auth token", "Invalid Credentials.");
	}

	return APIResponse.Success(res, "Successfully Invalidated Auth Token", "Successfully logged out.");

});

module.exports = router;
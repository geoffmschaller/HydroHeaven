const TokenGenerator = require('../utils/tokenGenerator');
const APIResponse = require('../utils/responses');
const User = require('../models/userModel');
const TOKEN_TYPES = require('../utils/constants');

const ResetTokenValidator = async (req, res, next) => {
	try {

		// VALIDATES GIVEN TOKEN
		const decodedToken = await TokenGenerator.validateResetToken(req.body.token);
		if (decodedToken === 500) return APIResponse.Error(res, "Invalid reset token supplied -- /ResetTokenValidator Middleware. ", "Invalid" +
			" Credentials.");

		// ADD DECODED TOKEN TO REQUEST
		req.body.decodedToken = decodedToken;

		// SUCCESS
		next();

	} catch (e) {
		return APIResponse.Error(res, "Invalid reset token supplied -- /ResetTokenValidator Middleware.", "Invalid Credentials.");
	}

};

module.exports = ResetTokenValidator;
const TokenGenerator = require('../utils/tokenGenerator');
const APIResponse = require('../utils/responses');

const AuthTokenValidator = async (req, res, next) => {
	try {
		if (await TokenGenerator.validateAuthToken(req.body.token) === 500) return APIResponse.Error(res, "Invalid reset token supplied --" +
			" /AuthTokenValidator Middleware. ", "Invalid Credentials.");
		next();
	} catch (e) {
		return APIResponse.Error(res, "Invalid reset token supplied -- /AuthTokenValidator Middleware.", "Invalid Credentials.");
	}

};

module.exports = AuthTokenValidator;
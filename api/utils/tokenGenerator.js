const jwt = require('jsonwebtoken');
const TOKEN_TYPES = require('../utils/constants');

class TokenGenerator {

	static generateAuthToken = async (email) => {
		try {
			return await jwt.sign({email: email, tokenType: TOKEN_TYPES.AUTH}, process.env.JWT_KEY);
		} catch (e) {
			return 500;
		}
	};

	static generateResetToken = async (email) => {
		try {
			return await jwt.sign({email: email, tokenType: TOKEN_TYPES.RESET_PASSWORD}, process.env.JWT_KEY);
		} catch (e) {
			return 500;
		}
	};

	static validateAuthToken = async (token) => {
		try {
			return await jwt.verify(token, process.env.JWT_KEY);
		} catch (e) {
			return 500;
		}
	};

	static validateResetToken = async (token) => {
		try {
			return await jwt.verify(token, process.env.JWT_KEY);
		} catch (e) {
			return 500;
		}
	};

}

module.exports = TokenGenerator;
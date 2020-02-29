const jwt = require('jsonwebtoken');
const {TokenTypes} = require('../utils/constants');

require('dotenv').config();

class TokenGenerator {

	static generateAuthToken = async (email) => {
		try {
			return await jwt.sign({email: email, tokenType: TokenTypes.AUTH}, process.env.JWT_KEY);
		} catch (e) {
			return false;
		}
	};

	static generateResetToken = async (email) => {
		try {
			return await jwt.sign({email: email, tokenType: TokenTypes.RESET_PASSWORD}, process.env.JWT_KEY);
		} catch (e) {
			return false;
		}
	};

	static validateAuthToken = async (token) => {
		try {
			return await jwt.verify(token, process.env.JWT_KEY);
		} catch (e) {
			return false;
		}
	};

	static validateResetToken = async (token) => {
		try {
			return await jwt.verify(token, process.env.JWT_KEY);
		} catch (e) {
			return false;
		}
	};

}

module.exports = TokenGenerator;
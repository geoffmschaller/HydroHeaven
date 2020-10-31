const jwt = require('jsonwebtoken');

const encodeAuthToken = async (email) => jwt.sign({
	email,
	date: new Date()
}, process.env.JWT_AUTH_TOKEN, { expiresIn: '1d' });

module.exports = encodeAuthToken;
const jwt = require('jsonwebtoken');

const encodeToken = async (values) => jwt.sign({
	...values,
	date: new Date()
}, process.env.JWT_AUTH_TOKEN, { expiresIn: '1d' });

module.exports = encodeToken;
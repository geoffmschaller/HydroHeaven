const jwt = require('jsonwebtoken');

const getAuthToken = (req, res, next) => {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader === 'undefined') res.json({status: 403, message: "Action not allowed. Not authorized"});
	req.token = bearerHeader.split(" ")[1];
	next();
};

const verifyAuthToken = async (req, res, next) => {
	try {
		jwt.verify(req.token, 'secret-key');
		next();
	} catch (e) {
		res.json({status: 403, message: "Action not allowed. Invalid Credentials"});
	}
};

module.exports = {getAuthToken, verifyAuthToken};
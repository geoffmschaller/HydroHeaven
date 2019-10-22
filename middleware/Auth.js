const jwt = require('jsonwebtoken');

const VerifyAuthToken = async (req, res, next) => {

	let token = req.body.token;

	if (!token) {
		return res.json({
			status: 500,
			message: "Network Error - Please try again."
		})
	}

	let result = await jwt.verify(token, process.env.JWT_SECRET_KEY);
	if (!result) {
		return res.json({
			status: 500,
			message: "Network Error - Invalid Credentials."
		})
	}

	next();

};

module.exports = VerifyAuthToken;
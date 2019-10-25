const jwt = require('jsonwebtoken');

const VerifyAuthToken = async (req, res, next) => {
	const { token } = req.body;

	if (!token) {
		return res.json({
			status: 500,
			message: 'Network Error - Please try again.',
		});
	}

	try {
		await jwt.verify(token, process.env.JWT_SECRET_KEY);
	} catch (e) {
		return res.json({
			status: 500,
			message: 'Network Error - Invalid Credentials.',
		});
	}

	next();

	return null;
};

module.exports = VerifyAuthToken;

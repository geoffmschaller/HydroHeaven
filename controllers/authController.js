const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const validator = require('../utils/Validators');
const inputTypes = require('../utils/InputTypes');

require('dotenv').config();

router.post('/login', async (req, res) => {
	
	const emailNotSafe = req.body.values[0].value;
	const passwordNotSafe = req.body.values[1].value;

	const errors = [];
	let separator = 'are';
	if (!validator(emailNotSafe, inputTypes.EMAIL_INPUT)) errors.push('Email');
	if (!validator(passwordNotSafe, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('Password');
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return res.json({
			status: 500,
			message: `Valid ${errors.join(' and ')} ${separator} required`,
		});
	}

	const user = await userModel.findOne({ email: emailNotSafe });
	if (!user) return res.json({ status: 500, message: 'Email does not exist.' });

	const passwordCheck = await bcrypt.compare(passwordNotSafe, user.password);
	if (!passwordCheck) return res.json({ status: 500, message: 'Invalid Credentials.' });

	const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET_KEY);
	return res.json({
		status: 200,
		message: 'Login Successful! Redirecting you now...',
		user: {
			email: user.email,
			id: user.id,
			token,
		},
	});
});

router.post('/verify-token', async (req, res) => {
	const { token } = req.body;
	if (!token) {
		return res.json({
			status: 500,
			message: 'Invalid Token',
		});
	}

	const verify = await jwt.decode(token, process.env.JWT_SECRET_KEY);
	if (!verify) {
		return res.json({
			status: 500,
			message: 'Invalid Token',
		});
	}
	const decode = jwt.decode(token);
	return res.json({
		status: 200,
		message: 'Verified User!',
		user: {
			email: decode.email,
			id: decode.id,
		},
	});
});

module.exports = router;

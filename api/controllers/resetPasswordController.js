const express = require('express');
const EmployeeModel = require('../models/employeeModel');
const changePWithPValidator = require('../validators/changePWithPValidator');
const generateResetTokenValidator = require('../validators/generateResetTokenValidator');
const changePWithTValidator = require('../validators/changePWithTValidator');
const hasher = require('../hashers/hasher');
const apiResponse = require('../responses/apiResponse');
const hashCompare = require('../hashers/hashCompare');
const encodeToken = require('../hashers/encodeToken');
const decodeToken = require('../hashers/decodeToken');

const router = express.Router();

router.post('/change-password-with-password', async (req, res) => {
	const validResult = await changePWithPValidator(req.body);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: { ...validResult.value, newPassword: '[REDACTED]', oldPassword: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const userInputs = {
		email: req.body.email,
		oldPassword: req.body.oldPassword,
		newPassword: req.body.newPassword
	};
	try {
		const employee = await EmployeeModel.findOne({ email: userInputs.email });
		if (!employee) {
			return apiResponse(res, {
				name: 'Unknown Email',
				status_code: 500,
				values: {
					email: userInputs.email
				},
				errors: validResult.errors,
				message: validResult.message
			});
		}
		if (!await hashCompare(userInputs.oldPassword, employee.password)) {
			return apiResponse(res, {
				name: 'Invalid Password',
				status_code: 500,
				values: {
					email: userInputs.email
				},
				errors: validResult.errors,
				message: validResult.message
			});
		}
		employee.password = await hasher(userInputs.newPassword);
		employee.accountEvents.push({ event: 'Password Changed via Link' });
		await employee.save();
		return apiResponse(res, {
			name: 'Password Changed Successfully!',
			status_code: 200,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Database Error',
			status_code: 500,
			values: validResult.value,
			errors: validResult.errors,
			message: err.message
		});
	}
});

router.post('/generate-reset-token', async (req, res) => {
	const validResult = await generateResetTokenValidator(req.body);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const userInputs = {
		email: req.body.email
	};
	try {
		const employee = await EmployeeModel.findOne({ email: userInputs.email });
		if (!employee) {
			return apiResponse(res, {
				name: 'Unknown Email',
				status_code: 500,
				values: validResult.value,
				errors: validResult.errors,
				message: validResult.message
			});
		}
		employee.resetToken = await encodeToken({ email: userInputs.email });
		await employee.save();
		// TODO: SEND RESET TOKEN VIA EMAIL
		return apiResponse(res, {
			name: 'Reset Token Sent',
			status_code: 200,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Unknown Error',
			status_code: 500,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
});

router.post('/change-password-with-token', async (req, res) => {
	const validResult = await changePWithTValidator(req.body);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: { ...validResult.value, newPassword: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const userInputs = {
		email: req.body.email,
		newPassword: req.body.newPassword,
		token: req.body.token,
		decodedToken: await decodeToken(req.body.token)
	};
	if (userInputs.decodedToken.email !== userInputs.email) {
		return apiResponse(res, {
			name: 'Invalid Email or Reset Token',
			status_code: 500,
			values: { ...validResult.value, newPassword: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
	try {
		const employee = await EmployeeModel.findOne({
			email: userInputs.email,
			resetToken: userInputs.token
		});
		if (!employee) {
			return apiResponse(res, {
				name: 'Invalid Email or Reset Token',
				status_code: 500,
				values: { ...validResult.value, newPassword: '[REDACTED]' },
				errors: validResult.errors,
				message: validResult.message
			});
		}
		employee.password = await hasher(userInputs.newPassword);
		employee.accountEvents.push({ event: 'Password Changed via Token' });
		employee.resetToken = '';
		await employee.save();
		return apiResponse(res, {
			name: 'Password Changed Successfully!',
			status_code: 200,
			values: { ...validResult.value, newPassword: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Unknown Error',
			status_code: 500,
			values: { ...validResult.value, newPassword: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
});

module.exports = router;

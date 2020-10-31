const express = require('express');
const EmployeeModel = require('../models/employeeModel');
const loginValidator = require('../validators/loginValidator');
const logoutValidator = require('../validators/logoutValidator');
const apiResponse = require('../responses/apiResponse');
const hashCompare = require('../hashers/hashCompare');
const encodeToken = require('../hashers/encodeToken');

const router = express.Router();

router.post('/login', async (req, res) => {
	const validResult = await loginValidator(req.body);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: { ...validResult.value, password: '[REDACTED]' },
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const userInputs = {
		email: req.body.email,
		password: req.body.password
	};
	try {
		const employee = await EmployeeModel.findOne({ email: req.body.email });
		if (!employee) {
			return apiResponse(res, {
				name: 'Email or Password is incorrect',
				status_code: 500,
				values: {
					email: userInputs.email
				},
				errors: validResult.errors,
				message: validResult.message
			});
		}
		if (!await hashCompare(userInputs.password, employee.password)) {
			employee.loginAttempts.push({ status: 500, message: 'Invalid Password' });
			await employee.save();
			return apiResponse(res, {
				name: 'Email or Password is incorrect',
				status_code: 500,
				values: {
					email: userInputs.email
				},
				errors: validResult.errors,
				message: validResult.message
			});
		}
		employee.loginAttempts.push({ status: 200, message: 'Successful Login' });
		const token = await encodeToken({ email: userInputs.email });
		employee.currentToken = token;
		await employee.save();
		return apiResponse(res, {
			name: 'Successful Login',
			status_code: 200,
			values: {
				email: userInputs.email,
				token
			},
			errors: validResult.errors,
			message: validResult.message
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Error, please try again',
			status_code: 500,
			values: {
				email: userInputs.email
			},
			errors: validResult.errors,
			message: validResult.message
		});
	}
});

router.post('/logout', async (req, res) => {
	const validResult = await logoutValidator(req.body);
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
				values: {
					email: userInputs.email
				},
				errors: validResult.errors,
				message: validResult.message
			});
		}
		employee.currentToken = '';
		await employee.save();
		return apiResponse(res, {
			name: 'Successful Logout',
			status_code: 200,
			values: {
				email: userInputs.email
			},
			errors: validResult.errors,
			message: validResult.message
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Error, please try again',
			status_code: 500,
			values: {
				email: userInputs.email
			},
			errors: validResult.errors,
			message: validResult.message
		});
	}
});

module.exports = router;

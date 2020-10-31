const express = require('express');
const EmployeeModel = require('../models/employeeModel');
const createEmployeeValidator = require('../validators/createEmployeeValidator');
const changePWithPValidator = require('../validators/changePWithPValidator');
const editEmployeeValidator = require('../validators/editEmployeeValidator');
const hasher = require('../hashers/hasher');
const apiResponse = require('../responses/apiResponse');
const hashCompare = require('../hashers/hashCompare');

const router = express.Router();

router.post('/new', async (req, res) => {
	const validResult = await createEmployeeValidator(req.body);
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
		name: req.body.name,
		email: req.body.email,
		password: await hasher(req.body.password),
		role: req.body.role,
		location: req.body.location,
		phone: req.body.phone
	};
	try {
		await new EmployeeModel(userInputs).save();
		return apiResponse(res, {
			name: 'Employee Created Successfully!',
			status_code: 200,
			values: { ...userInputs, password: '[REDACTED]' },
			errors: [],
			message: 'Thank you, we have received your message!'
		});
	}
	catch (err) {
		return apiResponse(res, {
			name: 'Database Error',
			status_code: 500,
			values: validResult.value,
			errors: [err.message],
			message: ''
		});
	}
});

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
		employee.accountEvents.push({ event: 'Password Changed' });
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

router.post('/edit', async (req, res) => {
	const validResult = await editEmployeeValidator(req.body);
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
		email: req.body.email,
		name: req.body.name,
		phone: req.body.phone,
		loction: req.body.location,
		role: req.body.role,
		accountActive: req.body.accountActive
	};
	try {
		const employee = await EmployeeModel.findOne({ email: req.body.email });
		if (!employee) {
			return apiResponse(res, {
				name: 'Unknown Email',
				status_code: 500,
				values: validResult.value,
				errors: validResult.errors,
				message: validResult.message
			});
		}
		for (const [key, value] of Object.entries(userInputs)) {
			if (key !== 'email') {
				employee[key] = value;
			}
		}
		employee.accountEvents.push({ event: 'Employee Details Changed by Geoff' });
		await employee.save();
		return apiResponse(res, {
			name: 'Employee Updated Successfully!',
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
			message: err
		});
	}
});

module.exports = router;
const express = require('express');
const EmployeeModel = require('../models/EmployeeModel');
const validator = require('../validators/employeeValidator');
const hasher = require('../hashers/hasher');
const apiResponse = require('../responses/apiResponse');

const router = express.Router();

router.post('/new', async (req, res) => {
	const validResult = await validator(req.body);
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
		name: req.body.name,
		email: req.body.email,
		password: await hasher(req.body.password)
	}
	try {
		await new EmployeeModel(userInputs).save();
		return apiResponse(res, {
			name: 'Employee Created Successfully!',
			status_code: 200,
			values: {...userInputs, password: '[REDACTED]'},
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

module.exports = router;

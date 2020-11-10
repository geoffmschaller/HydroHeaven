const express = require('express');
const mailer = require('../mailer/mailer');
const validator = require('../validators/contactValidator');
const ClientModel = require('../models/clientModel');
const apiResponse = require('../responses/apiResponse');
const { generateHouseContactPayload, generateClientContactPayload } = require('../mailer/contactPayloads');
const saveContact = require('../database/saveContact');

const router = express.Router();

router.post('/new', async (req, res) => {
	const userInputs = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	};
	const validResult = await validator(userInputs);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const saveResult = await saveContact(userInputs);
	if (saveResult !== 200) {
		return apiResponse(res, {
			name: 'Database Error',
			status_code: 500,
			values: validResult.value,
			errors: "Error: Please try again.",
			message: ''
		});
	}

	await mailer(generateHouseContactPayload(userInputs));
	await mailer(generateClientContactPayload(userInputs));

	return apiResponse(res, {
		name: 'Contact Success',
		status_code: 200,
		values: userInputs,
		errors: [],
		message: 'Thank you, we have received your message!'
	});
});

module.exports = router;

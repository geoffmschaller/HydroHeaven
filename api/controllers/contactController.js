const express = require('express');
const mailer = require('../mailer/mailer');
const validator = require('../validators/contactValidator');
const ClientModel = require('../models/clientModel');
const apiResponse = require('../responses/apiResponse');
const { generateHouseContactPayload, generateClientContactPayload } = require('../mailer/contactPayloads');

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
		message: req.body.message
	};
	try {
		const users = await ClientModel.findOne({ email: userInputs.email.toString() }).exec();
		if (!users) {
			await new ClientModel({
				name: userInputs.name,
				email: userInputs.email,
				contacts: [{ message: userInputs.message }]
			}).save();
		}
		else {
			users.contacts.push({ message: userInputs.message });
			await users.save();
		}
	}
	catch (e) {
		return apiResponse(res, {
			name: 'Database Error',
			status_code: 500,
			values: validResult.value,
			errors: [e.message],
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

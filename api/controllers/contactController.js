const express = require('express');
const mailer = require('../mailer/mailer');
const validator = require('../validators/contactValidator');
const clientModel = require('../models/clientModel');
const apiResponse = require('../responses/apiResponse');
const {generateHouseContactPayload, generateClientContactPayload} = require('../mailer/contactPayloads');

const router = express.Router();

router.post('/new', async (req, res) => {

	const valid_result = await validator(req.body);
	if (valid_result !== 200) return apiResponse(res, {
		name: "Validation Error",
		status_code: 500,
		values: valid_result.value,
		errors: valid_result.errors,
		message: valid_result.message
	});

	const user_inputs = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	};
	try {
		const users = await clientModel.findOne({ email: user_inputs.email.toString() }).exec();
		if (!users)
			await new clientModel({name: user_inputs.name, email: user_inputs.email, contacts: [{message: user_inputs.message}]}).save();
		else {
			users.contacts.push({ message: user_inputs.message });
			await users.save();
		}
	} catch (e) {
		return apiResponse(res, {
			name: "Database Error",
			status_code: 500,
			values: valid_result.value,
			errors: [e.message],
			message: ''
		});
	}

	await mailer(generateHouseContactPayload(user_inputs));
	await mailer(generateClientContactPayload(user_inputs));

	return apiResponse(res, {
		name: "Contact Success",
		status_code: 200,
		values: user_inputs,
		errors: [],
		message: "Thank you, we have received your message!"
	});

});

module.exports = router;
const express = require('express');
const mailer = require('../mailer/mailer');
const sanitizer = require('../sanitizer/sanitizer');
const validator = require('../validators/contactValidator');
const contactModel = require('../models/contactModel');
const apiResponse = require('../responses/apiResponse');

const router = express.Router();

router.post('/new', async (req, res) => {

	// VALIDATE INPUT
	const valid_result = await validator(req.body);
	console.log(valid_result);
	if (valid_result !== 200) return apiResponse(res, {
		name: "Validation Error",
		status_code: 500,
		values: valid_result.value,
		errors: valid_result.errors,
		message: valid_result.message
	});

	// SANITIZE
	const cleanedInputs = {
		name: sanitizer(req.body.name),
		email: sanitizer(req.body.email),
		message: sanitizer(req.body.message)
	};

	// SEND TO DB
	new contactModel({...cleanedInputs}).save();

	// SEND EMAILS
	const ClientContactPayload = {
		from: {name: 'Hydro Heaven Spas', address: "mailer@hydroheavenspas.com"},
		to: cleanedInputs.email,
		subject: "Message Received!",
		replyTo: "geoff@hydroheavenspas.com",
		template: {
			name: './mailer/views/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: cleanedInputs.name,
				email: cleanedInputs.email,
				message: cleanedInputs.message,
				header: "We have received your message!"
			}
		}
	}

	const HouseContactPayload = {
		from: {name: 'Clementine', address: "mailer@hydroheavenspas.com"},
		to: 'geoff@hydroheavenspas.com',
		subject: "New Message Received!",
		replyTo: cleanedInputs.email,
		template: {
			name: './mailer/views/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: cleanedInputs.name,
				email: cleanedInputs.email,
				message: cleanedInputs.message,
				header: "New message from website!"
			}
		}
	}

	await mailer(HouseContactPayload);
	await mailer(ClientContactPayload);

	return apiResponse(res, {
		name: "Contact Success",
		status_code: 200,
		values: cleanedInputs,
		errors: [],
		message: "Thank you, we have received your message!"
	});

});

module.exports = router;
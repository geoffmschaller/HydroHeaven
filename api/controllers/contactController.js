const express = require('express');
const mailer = require('../mailer/mailer');
const validator = require('../validators/contactValidator');
const contactModel = require('../models/contactModel');
const apiResponse = require('../responses/apiResponse');

const router = express.Router();

router.post('/new', async (req, res) => {

	// VALIDATE INPUT
	const valid_result = await validator(req.body);
	if (valid_result !== 200) return apiResponse(res, {
		name: "Validation Error",
		status_code: 500,
		values: valid_result.value,
		errors: valid_result.errors,
		message: valid_result.message
	});

	// SEND TO DB
	const user_inputs = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message
	};
	new contactModel({...user_inputs}).save();

	// SEND EMAILS
	const ClientContactPayload = {
		from: {name: 'Hydro Heaven Spas', address: "mailer@hydroheavenspas.com"},
		to: user_inputs.email,
		subject: "Message Received!",
		replyTo: "geoff@hydroheavenspas.com",
		template: {
			name: './mailer/views/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: user_inputs.name,
				email: user_inputs.email,
				message: user_inputs.message,
				header: "We have received your message!"
			}
		}
	}

	const HouseContactPayload = {
		from: {name: 'Clementine', address: "mailer@hydroheavenspas.com"},
		to: 'geoff@hydroheavenspas.com',
		subject: "New Message Received!",
		replyTo: user_inputs.email,
		template: {
			name: './mailer/views/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: user_inputs.name,
				email: user_inputs.email,
				message: user_inputs.message,
				header: "New message from website!"
			}
		}
	}

	await mailer(HouseContactPayload);
	await mailer(ClientContactPayload);

	return apiResponse(res, {
		name: "Contact Success",
		status_code: 200,
		values: user_inputs,
		errors: [],
		message: "Thank you, we have received your message!"
	});

});

module.exports = router;
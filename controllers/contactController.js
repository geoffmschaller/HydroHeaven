const express = require('express');

const router = express.Router();
const escapeTool = require('validator');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const mongoose = require('mongoose');
const validator = require('../utils/Validators');
const inputTypes = require('../utils/InputTypes');
const ContactModel = require('../models/contactModel');

require('dotenv').config();

router.post('/send-contact', async (req, res) => {
	const nameUnsafe = req.body.values[0].value;
	const emailUnsafe = req.body.values[1].value;
	const messageUnsafe = req.body.values[2].value;

	const errors = [];
	let separator = 'are';
	if (!validator(nameUnsafe, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('Name');
	if (!validator(emailUnsafe, inputTypes.EMAIL_INPUT)) errors.push('Email');
	if (!validator(messageUnsafe, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('Message');
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return res.json({
			status: 500,
			message: `Valid ${errors.join(', ')} ${separator} required`,
		});
	}

	const nameSafe = escapeTool.escape(nameUnsafe);
	const emailSafe = escapeTool.escape(emailUnsafe);
	const messageSafe = escapeTool.escape(messageUnsafe);

	const con = new ContactModel({
		_id: new mongoose.Types.ObjectId(),
		name: nameSafe,
		email: emailSafe,
		message: messageSafe,
	});
	try {
		await con.save();
	} catch (e) {
		return res.json({ status: 500, message: 'Network Error. Please try again.' });
	}

	if (process.env.FULL_ENVIROMENT === 'DEV') return res.json({ status: 200, message: 'Done' });

	const auth = {
		auth: {
			api_key: process.env.MAILGUN_API_KEY,
			domain: process.env.MAILGUN_DOMAIN,
		},
	};
	const nodemailerMailgun = nodemailer.createTransport(mg(auth));
	const clientPayload = {
		from: { name: 'Hydro Heaven', address: 'mailer@hydroheavenspas.com' },
		to: emailSafe,
		subject: 'Message Received!',
		'h:Reply-To': process.env.HOUSE_CONTACT_EMAIL,
		template: {
			name: './emails/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: nameSafe,
				email: emailSafe,
				message: messageSafe,
				header: 'We have Received your message!',
			},
		},
	};
	const housePayload = {
		from: { name: 'Clementine', address: 'mailer@hydroheavenspas.com' },
		to: process.env.HOUSE_CONTACT_EMAIL,
		subject: 'New Website Contact',
		template: {
			name: './emails/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: nameSafe,
				email: emailSafe,
				message: messageSafe,
				header: 'New message from website!',
			},
		},
	};
	try {
		await nodemailerMailgun.sendMail(clientPayload);
		await nodemailerMailgun.sendMail(housePayload);
	} catch (e) {
		return res.json({
			status: 500,
			message: 'Error Sending Emails',
		});
	}

	return res.json({
		status: 200,
		message: '',
	});
});

module.exports = router;

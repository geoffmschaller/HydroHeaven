const express = require("express");
const router = express.Router();
const escapeTool = require('validator');
const validator = require('../utils/Validators');
const inputTypes = require('../utils/InputTypes');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const ContactModel = require('../models/contactModel');
const mongoose = require('mongoose');

require('dotenv').config();

router.post("/send-contact", async (req, res) => {

	/*
		RAW USER INPUT
		User input straight from FE. User input at this point is still NOT SAFE.
	 */
	const name_NOTSAFE = req.body.name;
	const email_NOTSAFE = req.body.email;
	const message_NOTSAFE = req.body.message;

	/*
		VALIDATE INPUTS
		Custom validators to check user input. User input at this point is still NOT SAFE.
	 */
	let errors = [];
	let separator = "are";
	if (!validator(name_NOTSAFE, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("Name");
	if (!validator(email_NOTSAFE, inputTypes.EMAIL_INPUT)) errors.push("Email");
	if (!validator(message_NOTSAFE, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("Message");
	if (errors.length > 0) {
		if (errors.length === 1) separator = "is";
		return res.json({
			status: 500,
			message: "Valid " + errors.join(", ") + " " + separator + " required"
		})
	}

	/*
		CLEAN INPUTS
		Must run validators first. The escape method only takes a string and crashes otherwise.
	 */
	const nameSafe = escapeTool.escape(name_NOTSAFE);
	const emailSafe = escapeTool.escape(email_NOTSAFE);
	const messageSafe = escapeTool.escape(message_NOTSAFE);

	/*
		SAVE TO DB
		Saves safe user input to DB.
	 */
	let con = new ContactModel({
		_id: new mongoose.Types.ObjectId(),
		name: nameSafe,
		email: emailSafe,
		message: messageSafe
	});
	try {
		await con.save();
	} catch (e) {
		return res.json({status: 500, message: "Network Error. Please try again."});
	}

	/*
		DEV ENVIRONMENT CUT OFF
		Ends function in Dev Environment to not send contact emails.
	 */
	if (process.env.FULL_ENVIROMENT === "DEV") return res.json({status: 200, message: "Done"});

	/*
		SEND CONTACT EMAILS
		Sends summary emails to User and Notification emails to house.
	 */
	const auth = {
		auth: {
			api_key: process.env.MAILGUN_API_KEY,
			domain: process.env.MAILGUN_DOMAIN
		}
	};
	const nodemailerMailgun = nodemailer.createTransport(mg(auth));
	const clientPayload = {
		from: {name: "Hydro Heaven", address: "mailer@hydroheavenspas.com"},
		to: emailSafe,
		subject: 'Message Received!', 'h:Reply-To': process.env.HOUSE_CONTACT_EMAIL,
		template: {
			name: './emails/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: nameSafe,
				email: emailSafe,
				message: messageSafe,
				header: "We have Received your message!"
			}
		}
	};
	const housePayload = {
		from: {name: "Clementine", address: "mailer@hydroheavenspas.com"},
		to: process.env.HOUSE_CONTACT_EMAIL,
		subject: 'New Website Contact',
		template: {
			name: './emails/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: nameSafe,
				email: emailSafe,
				message: messageSafe,
				header: "New message from website!"
			}
		}
	};
	try {
		await nodemailerMailgun.sendMail(clientPayload);
		await nodemailerMailgun.sendMail(housePayload);
	} catch (e) {
		return res.json({
			status: 500,
			message: "Error Sending Emails"
		});
	}

	return res.json({
		status: 200,
		message: ""
	});

});

module.exports = router;
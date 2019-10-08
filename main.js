const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const validator = require('validator');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

require('dotenv').config();
require('pug');

const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN
	}
};
const nodemailerMailgun = nodemailer.createTransport(mg(auth));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./client/build'));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.post("/api/customer-contact", async (req, res) => {


	// VALIDATE INPUTS
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	let errors = [];
	let seperator = "are";
	if (typeof name !== 'string' || name === "") {
		errors.push("Name");
	}
	if (validator.isEmpty(email) || !validator.isEmail(email)) {
		errors.push("Email");
	}
	if (typeof message !== 'string' || message === "") {
		errors.push("Message");
	}
	if (errors.length > 0) {
		if (errors.length === 1) {
			seperator = "is";
		}
		return res.json({
			status: 500,
			message: "Valid " + errors.join(", ") + " " + seperator + " required"
		})
	}
	let nameSafe = validator.escape(req.body.name);
	let emailSafe = validator.escape(req.body.email);
	let messageSafe = validator.escape(req.body.message);

	// SEND EMAIL
	const clientPayload = {
		from: {name: "Hydro Heaven", address: "mailer@hydroheavenspas.com"},
		to: emailSafe,
		subject: 'Message Recieved!', 'h:Reply-To': process.env.HOUSE_CONTACT_EMAIL,
		template: {
			name: './emails/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: nameSafe,
				email: emailSafe,
				message: messageSafe,
				header: "We have recieved your message!"
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

app.listen(4000);
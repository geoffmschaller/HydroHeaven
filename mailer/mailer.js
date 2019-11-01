const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const escapeTool = require('validator');

require('dotenv').config();

const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN,
	},
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const SendClientContact = async (safeInputs) => {
	const clientPayload = {
		from: {name: 'Hydro Heaven', address: 'mailer@hydroheavenspas.com'},
		to: safeInputs.email,
		subject: 'Message Received!',
		'h:Reply-To': process.env.HOUSE_CONTACT_EMAIL,
		template: {
			name: './emails/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: safeInputs.name,
				email: safeInputs.email,
				message: escapeTool.unescape(safeInputs.message),
				header: 'We have Received your message!',
			},
		},
	};
	try {
		await nodemailerMailgun.sendMail(clientPayload);
	} catch (e) {
		return 500;
	}
	return 200;
};

const SendHouseContact = async (safeInputs) => {
	const housePayload = {
		from: {name: 'Clementine', address: 'mailer@hydroheavenspas.com'},
		to: process.env.HOUSE_CONTACT_EMAIL,
		subject: 'New Website Contact',
		template: {
			name: './emails/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: safeInputs.name,
				email: safeInputs.email,
				message: escapeTool.unescape(safeInputs.message),
				header: 'New message from website!',
			},
		},
	};
	try {
		await nodemailerMailgun.sendMail(housePayload);
	} catch (e) {
		return 500;
	}
	return 200;
};

module.exports = {SendClientContact, SendHouseContact};
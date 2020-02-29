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

class Mailer {

	static SendClientContact = async (contact) => {
		const clientPayload = {
			from: {name: 'Hydro Heaven', address: 'mailer@hydroheavenspas.com'},
			to: contact.email,
			subject: 'Message Received!',
			'h:Reply-To': process.env.HOUSE_CONTACT_EMAIL,
			template: {
				name: './emails/outbound_contact.pug',
				engine: 'pug',
				context: {
					name: contact.name,
					email: contact.email,
					message: escapeTool.unescape(contact.message),
					header: 'We have Received your message!',
				},
			},
		};
		try {
			return await nodemailerMailgun.sendMail(clientPayload);
		} catch (e) {
			return false;
		}
	};

	static SendHouseContact = async (contact) => {
		const housePayload = {
			from: {name: 'Clementine', address: 'mailer@hydroheavenspas.com'},
			to: process.env.HOUSE_CONTACT_EMAIL,
			subject: 'New Website Contact',
			template: {
				name: './emails/inbound_contact.pug',
				engine: 'pug',
				context: {
					name: contact.name,
					email: contact.email,
					message: escapeTool.unescape(contact.message),
					header: 'New message from website!',
				},
			},
		};
		try {
			return await nodemailerMailgun.sendMail(housePayload);
		} catch (e) {
			return false;
		}
	};


}

module.exports = Mailer;
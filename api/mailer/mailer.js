const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

require('dotenv').config();

const nodemailerMailgun = nodemailer.createTransport(mg({
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN,
	}
}));

const mailer = async (inputs) => {
	try {
		await nodemailerMailgun.sendMail({
			from: inputs.from,
			to: inputs.to,
			subject: inputs.subject,
			'h:Reply-To': inputs.replyTo,
			template: inputs.template
		});
	} catch (e) {
		console.log(e);
		return 500;
	}
	return 200;
}

module.exports = mailer;
import MailerDataInterface from "../interfaces/MailerDataInterface";

const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

require('dotenv').config();

const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN,
	},
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const SendEmail = async (inputs: MailerDataInterface) => {
	try {
		await nodemailerMailgun.sendMail({
            from: inputs.from,
            to: inputs.to,
            subject: inputs.subject,
            'h:Reply-To': inputs.replyTo,
            template: inputs.template
        });
	} catch (e) {
		return 500;
	}
	return 200;
};

export default SendEmail;
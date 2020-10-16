import express, {Request, Response} from 'express';
import Sanitizer from "../../validators/Sanitizer";
import TextValidator from "../../validators/TextValidator";
import EmailValidator from "../../validators/EmailValidator";
import APIResponse from "../../responses/APIResponse";
import MailerDataInterface from "../../interfaces/MailerDataInterface";
import SendEmail from '../../mailer/mailer';
import ContactModel from '../../models/ContactModel';

const ContactRouter = express.Router();

ContactRouter.post('/new', (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (!TextValidator(submittedName, 50)) return APIResponse.error(res, "Valid name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (!TextValidator(submittedMessage, 500)) return APIResponse.error(res, "Valid message required. Max length 500");

	// SAVE TO DB
	const dbResult = new ContactModel({
		name: submittedName,
		email: submittedEmail,
		message: submittedMessage
	}).save();

	// DEV CUT OFF
	if (process.env.NODE_ENV !== 'production') return APIResponse.success(res, "Successfully hit DEV Cut off.");

	const ClientContactPayload: MailerDataInterface = {
		from: {name: 'Hydro Heaven Spas', address: "mailer@hydroheavenspas.com"},
		to: submittedEmail,
		subject: "Message Recieved!",
		replyTo: "geoff@hydroheavenspas.com",
		template: {
			name: './emails/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: submittedName,
				email: submittedEmail,
				message: submittedMessage,
				header: "We have recieved your message!"
			}
		}
	}

	const HouseContactPayload: MailerDataInterface = {
		from: {name: 'Clementine', address: "mailer@hydroheavenspas.com"},
		to: 'geoff@hydroheavenspas.com',
		subject: "New Message Recieved!",
		replyTo: submittedEmail,
		template: {
			name: './emails/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: submittedName,
				email: submittedEmail,
				message: submittedMessage,
				header: "New message from website!"
			}
		}
	}

	// SEND CONTACT EMAILS
	SendEmail(ClientContactPayload);
	SendEmail(HouseContactPayload);

	return APIResponse.success(res, "Thank you! We have recieved your message!");
})

export default ContactRouter;
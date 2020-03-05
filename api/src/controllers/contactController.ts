import express, {Request, Response} from 'express';
import Sanitizer from "../utils/sanitizer";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";
import ContactAdapter from "../adapters/ContactAdapter";
import {DBMessages} from "../utils/constants";
import APIResponse from "../responses/APIResponse";
import ContactModel from "../models/ContactModel";
import Timer from "../utils/timer";
import DBResponse from "../responses/DBResponse";

const ContactRouter = express.Router();

ContactRouter.post("/new", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName: string = Sanitizer.sanitize(req.body.name);
	const submittedEmail: string = Sanitizer.sanitize(req.body.email);
	const submittedMessage: string = Sanitizer.sanitize(req.body.message);

	// VALIDATE DATA
	if (
		!TextValidator.validate(submittedName) ||
		!EmailValidator.validate(submittedEmail) ||
		!TextValidator.validate(submittedMessage)
	) return APIResponse.error(res, "Valid name, email, and message are required.");

	// TODO Find a way to return a DBResponse or a ContactModel.

	// BUILD CONTACT & SAVE
	let contact: ContactModel = new ContactModel(submittedName, submittedEmail, submittedMessage, undefined, Timer.dateTime());
	const createResult: DBResponse = await ContactAdapter.save(contact);
	if (createResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "Valid name, email, and message are required.");
	contact = createResult.payload;

	/*
		SEND CONTACT EMAILS
	 */

	return APIResponse.success(res, "Thank you! We have recieved your message!", contact);

});

export default ContactRouter;
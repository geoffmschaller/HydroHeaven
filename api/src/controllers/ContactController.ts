import express, {Request, Response} from 'express';
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";
import ContactAdapter from "../adapters/ContactAdapter";
import {DBMessages} from "../utils/Constants";
import APIResponse from "../responses/APIResponse";
import ContactModel from "../models/ContactModel";
import Timer from "../utils/Timer";
import DBResponse from "../responses/DBResponse";
import AuthTokenCheck from "../middleware/AuthTokenCheck";
import NumberValidator from "../validators/NumberValidator";

const ContactRouter = express.Router();

ContactRouter.post("/new", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (
		!TextValidator(submittedName) ||
		!EmailValidator(submittedEmail) ||
		!TextValidator(submittedMessage)
	) return APIResponse.error(res, "Valid name, email, and message are required.");

	// BUILD CONTACT & SAVE
	let generatedContact: ContactModel = new ContactModel(submittedName, submittedEmail, submittedMessage, undefined, Timer.dateTime());
	const createResult: DBResponse = await ContactAdapter.save(generatedContact);
	if (createResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");
	generatedContact = createResult.payload;

	/*
		SEND CONTACT EMAILS
	 */

	return APIResponse.success(res, "Thank you! We have recieved your message!", {contact: generatedContact});

});


ContactRouter.post("/all", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET ALL CONTACTS
	const contactsResult: DBResponse = await ContactAdapter.all();
	if (contactsResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");

	return APIResponse.success(res, "Thank you! We have recieved your message!", {contact: contactsResult.payload});

});

ContactRouter.post("/view", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: string = Sanitizer(req.body.id);

	// VALIDATE DATA
	if (
		!NumberValidator(submittedID)
	) return APIResponse.error(res, "Invalid Contact ID");

	// GET ALL CONTACTS
	const contactsResult: DBResponse = await ContactAdapter.find(parseInt(submittedID));
	if (contactsResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");

	return APIResponse.success(res, "Thank you! We have recieved your message!", {contact: contactsResult.payload});

});

ContactRouter.post("/update", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: string = Sanitizer(req.body.id);
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (
		!NumberValidator(submittedID) ||
		!TextValidator(submittedName) ||
		!EmailValidator(submittedEmail) ||
		!TextValidator(submittedMessage)
	) return APIResponse.error(res, "Valid name, email, message and id are required.");

	// GENERATE CONTACT AND UPDATE
	const generatedContact = new ContactModel(submittedName, submittedEmail, submittedMessage, parseInt(submittedID));
	const updateResult: DBResponse = await ContactAdapter.update(generatedContact);
	if (updateResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");

	return APIResponse.success(res, "Thank you! We have recieved your message!", {contact: updateResult.payload});

});

export default ContactRouter;
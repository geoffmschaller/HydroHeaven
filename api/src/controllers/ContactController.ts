import express, {Request, Response} from 'express';
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";
import {DBMessages} from "../utils/Constants";
import APIResponse from "../responses/APIResponse";
import ContactModel from "../models/ContactModel";
import Timer from "../utils/Timer";
import DBResponse from "../responses/DBResponse";
import AuthTokenCheck from "../middleware/AuthTokenCheck";
import NumberValidator from "../validators/NumberValidator";
import DBAdapter from "../adapters/DBAdapter";

const ContactRouter = express.Router();
const routerDBTable = 'contacts';

ContactRouter.post("/new", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (!TextValidator(submittedName, 50)) return APIResponse.error(res, "Valid name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (!TextValidator(submittedMessage, 500)) return APIResponse.error(res, "Valid message required. Max length 500");

	// BUILD CONTACT & SAVE
	let generatedContact: ContactModel = new ContactModel(submittedName, submittedEmail, submittedMessage, undefined, Timer.dateTime());
	const queryResult: DBResponse = await new DBAdapter().save(routerDBTable, generatedContact);
	if (queryResult.status === DBMessages.CONNECTION_FAILURE) return APIResponse.error(res, "DB connection error. Please try again.");
	if (queryResult.status === DBMessages.SAVE_ERROR) return APIResponse.error(res, "Could not save contact. Please try again.");
	if (queryResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");
	generatedContact = queryResult.payload;

	/*
		SEND CONTACT EMAILS
	 */

	return APIResponse.success(res, "Thank you! We have recieved your message!", {contact: generatedContact});

});


ContactRouter.post("/all", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET ALL CONTACTS
	const queryResult: DBResponse = await new DBAdapter().all(routerDBTable);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Contacts found.", {contact: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

ContactRouter.post("/view", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: string = Sanitizer(req.body.id);

	// VALIDATE DATA
	if (!NumberValidator(submittedID, null, 0)) return APIResponse.error(res, "Invalid Contact ID");

	// GET ALL CONTACTS
	const queryResult: DBResponse = await new DBAdapter().find(routerDBTable, parseInt(submittedID));
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "Invalid contact id.");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully added new address.", {addresses: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

ContactRouter.post("/update", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: string = Sanitizer(req.body.id);
	const submittedName: string = Sanitizer(req.body.name);
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (!NumberValidator(submittedID, null, 0)) return APIResponse.error(res, "Invalid ID supplied");
	if (!TextValidator(submittedName, 50)) return APIResponse.error(res, "Valid first name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (!TextValidator(submittedMessage, 500)) return APIResponse.error(res, "Valid message required. Max length 500");

	// GENERATE CONTACT AND UPDATE
	const generatedContact = new ContactModel(submittedName, submittedEmail, submittedMessage, parseInt(submittedID));
	const queryResult: DBResponse = await new DBAdapter().update(routerDBTable, generatedContact);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "Invalid ID");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully added new address.", {addresses: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

export default ContactRouter;
import express, {Request, Response} from 'express';
import Sanitizer from "../utils/sanitizer";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";
import ContactModel from "../models/ContactModel";
import ContactAdapter from "../adapters/ContactAdapter";
import {DBMessages, IDGeneratorRules} from "../utils/constants";
import IDGenerator from "../utils/idGenerator";
import Timer from "../utils/timer";
import APIResponse from "../responses/APIResponse";

const router = express.Router();

router.post("/new", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName = Sanitizer.sanitize(req.body.name);
	const submittedEmail = Sanitizer.sanitize(req.body.email);
	const submittedMessage = Sanitizer.sanitize(req.body.message);

	// VALIDATE DATA
	if (
		!TextValidator.validate(submittedName) ||
		!EmailValidator.validate(submittedEmail) ||
		!TextValidator.validate(submittedMessage)
	) return APIResponse.error(res, "Valid name, email, and message are required.");

	// GENERATE CONTACT, UNIQUE ID AND DATE
	let contact: ContactModel = new ContactModel(submittedName, submittedEmail, submittedMessage);
	let count = 0;
	while (!contact.id && count < 5) {
		count += 1;
		let token = IDGenerator.generate(IDGeneratorRules.NUMERIC_LOWER_UPPER, 25);
		let check = await ContactAdapter.find(token);
		if (check.status === DBMessages.SUCCESS) {
			contact.id = token;
			contact.date = Timer.dateTime();
		}
		if (check.status === DBMessages.CONNECTION_FAILURE) return APIResponse.error(res, "Valid name, email, and message are required.");
	}

	// BUILD CONTACT & SAVE
	const createResult = await ContactAdapter.save(contact);
	if (createResult.status != DBMessages.SUCCESS) return APIResponse.error(res, "Valid name, email, and message are required.");
	contact = createResult.payload['contact'];

	/*
		SEND CONTACT EMAILS
	 */

	return APIResponse.success(res, "Thank you! We have recieved your message!");

});

module.exports = router;
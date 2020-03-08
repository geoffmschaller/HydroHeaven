import express, {Request, Response} from 'express';
import AuthTokenCheck from "../middleware/AuthTokenCheck";
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import NumberValidator from "../validators/NumberValidator";
import APIResponse from "../responses/APIResponse";
import EmailValidator from "../validators/EmailValidator";
import AddressBookModel from "../models/AddressModel";
import {DBMessages} from "../utils/Constants";
import DBAdapter from "../adapters/DBAdapter";

const AddressBookRouter = express.Router();
const routerDBTable = 'addressBook';

AddressBookRouter.post("/new", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedFirstName: string = Sanitizer(req.body.firstName);
	const submittedLastName: string = Sanitizer(req.body.lastName);
	const submittedPhoneNumber: string = Sanitizer(req.body.phone, ["\\."], true);
	let submittedEmail: string | undefined = req.body.email ? Sanitizer(req.body.email) : undefined;
	let submittedAddress: string | undefined = req.body.address ? Sanitizer(req.body.address) : undefined;

	// VALIDATE DATA
	if (!TextValidator(submittedFirstName, 50)) return APIResponse.error(res, "Valid first name is required. Max length 50.");
	if (!TextValidator(submittedLastName, 50)) return APIResponse.error(res, "Valid last name is required. Max length 50.");
	if (!NumberValidator(submittedPhoneNumber, 9999999999, 1000000000)) return APIResponse.error(res, "Valid phone number is required. Format: *** *** ****.");
	if (submittedEmail && !EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (submittedAddress && !TextValidator(submittedAddress, 100)) return APIResponse.error(res, "Valid address is required. Max length 100.");

	// GENERATE ADDRESS AND SAVE
	let generatedAddressBook: AddressBookModel = new AddressBookModel(submittedFirstName, submittedLastName, submittedPhoneNumber, 123, submittedEmail, submittedAddress, "");
	const queryResult = await new DBAdapter().save(routerDBTable, generatedAddressBook);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.NON_UNIQUE:
			return APIResponse.error(res, "Phone number must be unique");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully added new address.", {addresses: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

AddressBookRouter.post("/all", AuthTokenCheck, async (req: Request, res: Response) => {

	// GENERATE ADDRESS AND SAVE
	const queryResult = await new DBAdapter().all(routerDBTable);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Addresses found.", {addresses: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

AddressBookRouter.post("/view", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: number = req.body.id;

	// VALIDATE DATA
	if (!NumberValidator(submittedID, null, 0)) return APIResponse.error(res, "Invalid ID supplied");

	// GENERATE ADDRESS AND SAVE
	const queryResult = await new DBAdapter().find(routerDBTable, submittedID);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "No results for that ID.");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Found address.", {addresses: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

AddressBookRouter.post("/update", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID: number = req.body.id;
	const submittedFirstName: string = Sanitizer(req.body.firstName);
	const submittedLastName: string = Sanitizer(req.body.lastName);
	const submittedPhoneNumber: string = Sanitizer(req.body.phone, ["\\."], true);
	let submittedEmail: string | undefined = req.body.email ? Sanitizer(req.body.email) : undefined;
	let submittedAddress: string | undefined = req.body.address ? Sanitizer(req.body.address) : undefined;


	// VALIDATE DATA
	if (!NumberValidator(submittedID, null, 0)) return APIResponse.error(res, "Valid ID required.");
	if (!TextValidator(submittedFirstName, 50)) return APIResponse.error(res, "Valid first name is required. Max length 50.");
	if (!TextValidator(submittedLastName, 50)) return APIResponse.error(res, "Valid last name is required. Max length 50.");
	if (!NumberValidator(submittedPhoneNumber, 9999999999, 1000000000)) return APIResponse.error(res, "Valid phone number is required. Format: *** *** ****.");
	if (submittedEmail && !EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (submittedAddress && !TextValidator(submittedAddress, 100)) return APIResponse.error(res, "Valid address is required. Max length 100.");

	// GENERATE ADDRESS AND SAVE
	let generatedAddressBook: AddressBookModel = new AddressBookModel(submittedFirstName, submittedLastName, submittedPhoneNumber, submittedID, submittedEmail, submittedAddress);
	const queryResult = await new DBAdapter().update(routerDBTable, generatedAddressBook);
	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.NON_UNIQUE:
			return APIResponse.error(res, "Phone number must be unique");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "Invalid ID");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully added new address.", {address: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

export default AddressBookRouter;
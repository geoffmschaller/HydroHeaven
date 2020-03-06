import express, {Request, Response} from 'express';
import AuthTokenCheck from "../middleware/AuthTokenCheck";
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import NumberValidator from "../validators/NumberValidator";
import APIResponse from "../responses/APIResponse";
import EmailValidator from "../validators/EmailValidator";
import AddressBookModel from "../models/AddressModel";
import AddressBookAdapter from "../adapters/AddressBookAdapter";
import {DBMessages} from "../utils/Constants";
import DBAdapter from "../adapters/DBAdapter";

const AddressBookRouter = express.Router();

AddressBookRouter.post("/new", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedFirstName: string = Sanitizer(req.body.firstName);
	const submittedLastName: string = Sanitizer(req.body.lastName);
	const submittedPhoneNumber: string = Sanitizer(req.body.phone, ["\\."], true);
	let submittedEmail: string | undefined;
	let submittedAddress: string | undefined;

	// VALIDATE DATA
	if (
		!TextValidator(submittedFirstName) ||
		!TextValidator(submittedLastName) ||
		!NumberValidator(submittedPhoneNumber)
	) return APIResponse.error(res, "Valid first name, last name, phone number are required.");
	if (submittedEmail) {
		if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Invalid email supplied");
	}
	if (submittedAddress) {
		if (!TextValidator(submittedAddress)) return APIResponse.error(res, "Invalid address supplied");
	}

	// GENERATE ADDRESS AND SAVE
	let generatedAddressBook: AddressBookModel = new AddressBookModel(submittedFirstName, submittedLastName, parseInt(submittedPhoneNumber));

	const saveResult = await DBAdapter.save('addressBook', generatedAddressBook);
	if (saveResult.status === DBMessages.CONNECTION_FAILURE) return APIResponse.error(res, "DB connection error. Please try again.");
	if (saveResult.status === DBMessages.CREATE_ERROR) return APIResponse.error(res, "Could not save contact. Please try again.");
	if (saveResult.status === DBMessages.NON_UNIQUE) return APIResponse.error(res, "Phone number must be unique");
	if (saveResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");
	generatedAddressBook = saveResult.payload;


	return APIResponse.success(res, "Successfully added new address.", {address: generatedAddressBook});


});

AddressBookRouter.post("/all", AuthTokenCheck, async (req: Request, res: Response) => {

	// GENERATE ADDRESS AND SAVE
	const getResult = await DBAdapter.all('addressBook');
	if (getResult.status === DBMessages.CONNECTION_FAILURE) return APIResponse.error(res, "DB connection error. Please try again.");
	if (getResult.status === DBMessages.GET_ERROR) return APIResponse.error(res, "Could not get addresses. Please try again.");
	if (getResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");

	return APIResponse.success(res, "Successfully added new address.", {addresses: getResult.payload});

});

AddressBookRouter.post("/view", AuthTokenCheck, async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedID = Sanitizer(req.body.id);

	// VALIDATE DATA
	if (
		!NumberValidator(submittedID)
	) return APIResponse.error(res, "Invalid ID supplied");


	// GENERATE ADDRESS AND SAVE
	const getResult = await DBAdapter.find('addressBook', parseInt(submittedID));
	if (getResult.status === DBMessages.CONNECTION_FAILURE) return APIResponse.error(res, "DB connection error. Please try again.");
	if (getResult.status === DBMessages.GET_ERROR) return APIResponse.error(res, "Could not get addresses. Please try again.");
	if (getResult.status !== DBMessages.SUCCESS) return APIResponse.error(res, "An error occured. Please try again.");

	return APIResponse.success(res, "Successfully added new address.", {addresses: getResult.payload});

});

export default AddressBookRouter;
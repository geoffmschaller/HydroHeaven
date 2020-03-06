import express, {Request, Response} from 'express';
import AuthTokenCheck from "../middleware/AuthTokenCheck";
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import NumberValidator from "../validators/NumberValidator";
import APIResponse from "../responses/APIResponse";
import EmailValidator from "../validators/EmailValidator";
import AddressBookModel from "../models/AddressModel";

const AddressBookRouter = express.Router();

AddressBookRouter.post("/new", AuthTokenCheck, (req: Request, res: Response) => {

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

	// GENERATE ADDRESS
	const generatedAddressBook = new AddressBookModel(submittedFirstName, submittedLastName, parseInt(submittedPhoneNumber));

	return APIResponse.success(res, "Successfully added new address.", {address: generatedAddressBook});


});

export default AddressBookRouter;
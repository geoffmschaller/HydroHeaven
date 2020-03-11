import express, {Request, Response} from 'express';
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";
import {DBMessages} from "../utils/Constants";
import APIResponse from "../responses/APIResponse";
import DBResponse from "../responses/DBResponse";
import UserModel from "../models/UserModel";
import UsersAdapter from "../adapters/UsersAdapter";
import NumberValidator from "../validators/NumberValidator";

const UsersController = express.Router();

UsersController.post("/new", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedFirstName: string = Sanitizer(req.body.firstName);
	const submittedLastName: string = Sanitizer(req.body.lastName);
	const submittedPassword: string = Sanitizer(req.body.password);

	// VALIDATE DATA
	if (!TextValidator(submittedFirstName, 50)) return APIResponse.error(res, "Valid first name required. Max length 50.");
	if (!TextValidator(submittedLastName, 50)) return APIResponse.error(res, "Valid last name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");
	if (!TextValidator(submittedPassword, 50, 10)) return APIResponse.error(res, "Valid password required. Max length 50, Min length 10");

	// BUILD USER & SAVE
	let generatedUser: UserModel = new UserModel(submittedEmail, submittedFirstName, submittedLastName);
	const queryResult: DBResponse = await new UsersAdapter().save(generatedUser, submittedPassword);

	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.SAVE_ERROR:
			return APIResponse.error(res, "Could not save user. Please try again.");
		case DBMessages.NON_UNIQUE:
			return APIResponse.error(res, "Email must be unique.");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully created user.", {user: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

UsersController.post("/all", async (req: Request, res: Response) => {

	// RETRIEVE ALL USERS
	const queryResult: DBResponse = await new UsersAdapter().all();

	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.GET_ERROR:
			return APIResponse.error(res, "Could not get users. Please try again.");
		case DBMessages.SUCCESS:
			for (let i = 0; i < queryResult.payload.length; i++) {
				queryResult.payload[i].password = null;
			}
			return APIResponse.success(res, "Successfully found users.", {users: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

UsersController.post("/view", async (req: Request, res: Response) => {

	// GET SUBMITTED ID
	const submittedId = req.body.id;

	// VALIDATE ID
	if (!NumberValidator(submittedId)) return APIResponse.error(res, "Invalid ID submitted.");

	// RETRIEVE ALL USERS
	const queryResult: DBResponse = await new UsersAdapter().find(submittedId);

	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.GET_ERROR:
			return APIResponse.error(res, "Could not get users. Please try again.");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "No user for that Id.");
		case DBMessages.SUCCESS:
			queryResult.payload.password = null;
			return APIResponse.success(res, "Successfully found users.", {user: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

UsersController.post("/update", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedId = req.body.id;
	const submittedEmail: string = Sanitizer(req.body.email);
	const submittedFirstName: string = Sanitizer(req.body.firstName);
	const submittedLastName: string = Sanitizer(req.body.lastName);

	// VALIDATE DATA
	if (!NumberValidator(submittedId)) return APIResponse.error(res, "Invalid ID submitted.");
	if (!TextValidator(submittedFirstName, 50)) return APIResponse.error(res, "Valid first name required. Max length 50.");
	if (!TextValidator(submittedLastName, 50)) return APIResponse.error(res, "Valid last name required. Max length 50.");
	if (!EmailValidator(submittedEmail)) return APIResponse.error(res, "Valid email required.");

	// RETRIEVE ALL USERS
	const generatedUser: UserModel = new UserModel(submittedEmail, submittedFirstName, submittedLastName, submittedId);
	const queryResult: DBResponse = await new UsersAdapter().update(generatedUser);

	switch (queryResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "DB connection error. Please try again.");
		case DBMessages.GET_ERROR:
			return APIResponse.error(res, "Could not get users. Please try again.");
		case DBMessages.NON_UNIQUE:
			return APIResponse.error(res, "Email must be unique.");
		case DBMessages.NO_RESULTS_FOR_ID:
			return APIResponse.error(res, "No user for that Id.");
		case DBMessages.SUCCESS:
			queryResult.payload.password = null;
			return APIResponse.success(res, "Successfully found users.", {user: queryResult.payload});
		default:
			return APIResponse.error(res, "An error occured. Please try again.");
	}

});

export default UsersController;
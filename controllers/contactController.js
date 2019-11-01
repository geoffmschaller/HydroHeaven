const express = require('express');
const router = express.Router();
const Validator = require('../validators/validators');
const Mailer = require('../mailer/mailer');
const DB = require('../db/contacts');
const APIResponses = require('../responses/responses');
const InputTypes = require('../types/inputs');

require('dotenv').config();

router.post('/send-contact', async (req, res) => {

	// VALIDATE AND CLEAN INPUTS
	const unsafeInputs = {
		name: {
			type: InputTypes.NON_NUMERIC_TEXT_INPUT,
			value: req.body.values[0].value,
			name: "name"
		},
		email: {
			type: InputTypes.EMAIL_INPUT,
			value: req.body.values[1].value,
			name: "email"
		},
		message: {
			type: InputTypes.NON_NUMERIC_TEXT_INPUT,
			value: req.body.values[2].value,
			name: "message"
		}
	};

	// CLEAN AND VALIDATE INPUTS
	const validationResults = Validator.validateInputs(unsafeInputs);
	if (validationResults !== 200) return APIResponses.ValidationErrorResponse(res, validationResults);
	const safeInputs = Validator.cleanInputs(unsafeInputs);

	// DEV CUT OFF
	if (process.env.NODE_ENV === 'DEVELOPMENT') return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");

	// INSERT INTO DB
	const dbInsertResult = await DB.InsertNewContact(safeInputs);
	if (dbInsertResult === 500) return APIResponses.DatabaseErrorResponse(res);

	// SEND CONFIRMATION EMAILS
	const sendHouseEmailResult = await Mailer.SendHouseContact(safeInputs);
	const sendClientEmailResult = await Mailer.SendClientContact(safeInputs);
	if (sendHouseEmailResult === 500 || sendClientEmailResult === 500) return APIResponses.NetworkErrorResponse(res, "Oops! Something went wrong. Don't worry, we are working on it!");

	return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");

});

module.exports = router;

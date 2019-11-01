const express = require('express');
const router = express.Router();
const Validator = require('../validators/validators');
const Mailer = require('../mailer/mailer');
const DB = require('../db/contacts');
const APIResponses = require('../responses/responses');

require('dotenv').config();

router.post('/send-contact', async (req, res) => {

	// VALIDATE AND CLEAN INPUTS
	const unsafeInputs = {
		name: req.body.values[0].value,
		email: req.body.values[1].value,
		message: req.body.values[2].value
	};
	const validationResults = Validator.ValidateInputs(unsafeInputs);
	if (validationResults !== 200) return APIResponses.ValidationErrorResponse(res, validationResults);
	const safeInputs = Validator.CleanInputs(unsafeInputs);

	// INSERT INTO DB
	const dbInsertResult = await DB.InsertNewContact(safeInputs);
	if (dbInsertResult === 500) return APIResponses.DatabaseErrorResponse(res);

	// DEV CUT OFF
	if (process.env.NODE_ENV === 'DEVELOPMENT') return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");

	// SEND CONFIRMATION EMAILS
	const sendHouseEmailResult = await Mailer.SendHouseContact(safeInputs);
	const sendClientEmailResult = await Mailer.SendClientContact(safeInputs);
	if (sendHouseEmailResult === 500 || sendClientEmailResult === 500) return APIResponses.NetworkErrorResponse(res, "Oops! Something went wrong. Don't worry, we are working on it!");

	return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");
	
});

module.exports = router;

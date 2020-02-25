const express = require('express');
const router = express.Router();
const Validator = require('../utils/validator');
const Sanitizer = require('../utils/sanitizer');
const Mailer = require('../utils/mailer');
const APIResponses = require('../utils/responses');
const Contact = require('../models/contactModel');

require('dotenv').config();

router.post('/send-contact', async (req, res) => {

	// SANITIZE INPUTS
	const submittedName = Sanitizer.sanitizeInput(req.body.name);
	const submittedEmail = Sanitizer.sanitizeInput(req.body.email);
	const submittedMessage = Sanitizer.sanitizeInput(req.body.message);

	// VALIDATE INPUTS
	const nameValidation = Validator.validateText(submittedName);
	const emailValidation = Validator.validateEmail(submittedEmail);
	const messageValidation = Validator.validateText(submittedMessage);
	if (!nameValidation || !emailValidation || !messageValidation) return APIResponses.ValidationErrorResponse(res, "Valid Name, Email, and Message" +
		" are Required.");

	// CREATE CONTACT MODEL & SAVE TO DB
	const contact = new Contact(submittedName, submittedEmail, submittedMessage);
	const saveContactResult = await contact.save();
	if (saveContactResult !== 200) return APIResponses.DatabaseErrorResponse(res);

	// DEV CUT OFF
	if (req.body.local) return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");

	// SEND CONFIRMATION EMAILS
	const sendHouseEmailResult = await Mailer.SendHouseContact(contact);
	const sendClientEmailResult = await Mailer.SendClientContact(contact);
	if (sendHouseEmailResult === 500 || sendClientEmailResult === 500) return APIResponses.NetworkErrorResponse(res, "Oops! Something went wrong. Don't worry, we are working on it!");

	return APIResponses.SuccessfulResponse(res, "Thank You! We have received your message!");

});

module.exports = router;

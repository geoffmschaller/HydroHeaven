const express = require('express');
const router = express.Router();
const Validator = require('../utils/validator');
const Sanitizer = require('../utils/sanitizer');
const Mailer = require('../utils/mailer');
const APIResponses = require('../utils/responses');
const Contact = require('../models/contactModel');
const {DBErrors, MailerErrors} = require('../utils/constants');

require('dotenv').config();

router.post('/send-contact', async (req, res) => {

	// SANITIZE INPUTS
	const submittedName = Sanitizer.sanitizeText(req.body.name);
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedMessage = Sanitizer.sanitizeText(req.body.message);

	// VALIDATE INPUTS
	if (!Validator.validateText(submittedName) || !Validator.validateEmail(submittedEmail) || !Validator.validateText(submittedMessage)) return APIResponses.Error(res, "Invalid name, email or message supplied -- /send-contact controller.", "Valid Name, Email, and Message are Required.");

	// CREATE CONTACT MODEL & SAVE TO DB
	const contact = Contact.save(submittedName, submittedEmail, submittedMessage);
	if (!await contact) {
		return APIResponses.Error(res, "DB Error unable to save contact -- /send-contact controller.", "An error occured. Please try again.");
	}

	// DEV CUT OFF
	if (req.body.local) return APIResponses.Success(res, "Thank You! We have received your message!");

	// SEND CONFIRMATION EMAILS
	if (!await Mailer.SendHouseContact(contact) || !await Mailer.SendClientContact(contact)) {
		return APIResponses.Error(res, "Email Error unable to send confirmation emails -- /send-contact controller.", "An error occured. Please" +
			" try again.");
	}

	return APIResponses.Success(res, "Thank You! We have received your message!");

});

module.exports = router;

const express = require('express');
const router = express.Router();
const AddressBook = require('../models/addressBookModel');
const Sanitizer = require('../utils/sanitizer');
const Validator = require('../utils/validator');
const APIResponse = require('../utils/responses');
const IDGenerator = require('../utils/idGenerator');

router.get('/', async (req, res) => {
	return res.json({addresses: await AddressBook.all()});
});

router.get('/:address', async (req, res) => {
	return res.json({addresses: await AddressBook.find(req.params.address)});
});

router.post('/', async (req, res) => {

	// SANITIZE INPUTS
	const submittedFName = Sanitizer.sanitizeText(req.body.fname);
	const submittedLName = Sanitizer.sanitizeText(req.body.lname);
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPhone = Sanitizer.sanitizeText(req.body.phone);
	const submittedAddress = Sanitizer.sanitizeText(req.body.address);

	// VALIDATE INPUTS
	if (!Validator.validateText(submittedFName) ||
		!Validator.validateText(submittedLName) ||
		!Validator.validateEmail(submittedEmail) ||
		!Validator.validateText(submittedPhone) ||
		!Validator.validateText(submittedAddress)
	) return APIResponse.Error(res, "Invalid Inputs", "Invalid Inputs");

	// CREATE UNIQUE CLIENT ID
	let unique = false;
	let generatedId;
	while (!unique) {
		generatedId = await IDGenerator.generateAddressBookId(20);
		const addressBookEntry = await AddressBook.find(generatedId);
		if (!addressBookEntry) {
			unique = true;
		}
	}

	// CREATE ADDRESS BOOK ENTRY
	const entryResult = await AddressBook.add(generatedId, submittedFName, submittedLName, submittedEmail, submittedPhone, submittedAddress);
	if (!entryResult) return APIResponse.Error(res, "DB ERROR could not add into address book -- /address-book", "Error.");

	return APIResponse.Success(res, "Success");
});

router.post('/:address', async (req, res) => {

	// SANITIZE INPUTS
	const submittedFName = Sanitizer.sanitizeText(req.body.fname);
	const submittedLName = Sanitizer.sanitizeText(req.body.lname);
	const submittedEmail = Sanitizer.sanitizeText(req.body.email);
	const submittedPhone = Sanitizer.sanitizeText(req.body.phone);
	const submittedAddress = Sanitizer.sanitizeText(req.body.address);

	// VALIDATE INPUTS
	if (!Validator.validateText(submittedFName) ||
		!Validator.validateText(submittedLName) ||
		!Validator.validateEmail(submittedEmail) ||
		!Validator.validateText(submittedPhone) ||
		!Validator.validateText(submittedAddress)
	) return APIResponse.Error(res, "Invalid Inputs", "Invalid Inputs");

	// CREATE ADDRESS BOOK ENTRY
	const updateResult = await AddressBook.update(req.params.address, {
		'firstName': submittedFName,
		'lastName': submittedLName,
		'phone': submittedPhone,
		'email': submittedEmail,
		'address': submittedAddress
	});
	if (!updateResult) return APIResponse.Error(res, "DB ERROR could not update address book -- /address-book", "Error.");

	return APIResponse.Success(res, "Success");
});

module.exports = router;
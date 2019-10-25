const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const escapeTool = require('validator');
const ClientModel = require('../models/clientModel');
const InputTypes = require('../utils/InputTypes');
const Validator = require('../utils/Validators');
const VerifyAuthToken = require('../middleware/Auth');


router.post('/get-all-clients', VerifyAuthToken, async (req, res) => {
	const results = await ClientModel.find();
	return res.json(
		{
			status: 200,
			message: 'Success!',
			clients: results,
		},
	);
});

router.post('/get-client-by-id', VerifyAuthToken, async (req, res) => {
	const result = await ClientModel.findById(req.body.id);
	return res.json(
		{
			status: 200,
			message: 'Success!',
			client: result,
		},
	);
});

router.post('/add-new-client', VerifyAuthToken, async (req, res) => {
	// RAW DATA
	const firstNameUnsafe = req.body.client.firstName;
	const lastNameUnsafe = req.body.client.lastName;
	const emailUnsafe = req.body.client.email;
	const phoneUnsafe = req.body.client.phone.toString().replace(/(\()/g, '').replace(/(\))/g, '').replace(/-/g, '')
		.replace(/ /g, '')
		.trim();
	const addressUnsafe = req.body.client.address;

	// VALIDATE INPUTS
	const errors = [];
	let separator = 'are';
	if (!Validator(firstNameUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('first name');
	if (!Validator(lastNameUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('last name');
	if (!Validator(phoneUnsafe, InputTypes.PHONE_INPUT)) errors.push('phone');
	if (emailUnsafe !== '') {
		if (!Validator(emailUnsafe, InputTypes.EMAIL_INPUT)) errors.push('email');
	}
	if (addressUnsafe !== '') {
		if (!Validator(addressUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('address');
	}
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return res.json({
			status: 500,
			message: `Valid ${errors.join(', ')} ${separator} required`,
		});
	}

	// ESCAPE & TRANSFORM INPUTS
	const firstNameSafe = escapeTool.escape(firstNameUnsafe);
	const lastNameSafe = escapeTool.escape(lastNameUnsafe);
	const phoneSafe = escapeTool.escape(phoneUnsafe);
	let emailSafe = '';
	if (emailUnsafe !== '') {
		emailSafe = escapeTool.escape(emailUnsafe);
	}
	let addressSafe = '';
	if (addressUnsafe !== '') {
		addressSafe = escapeTool.escape(addressUnsafe);
	}

	// CHECK IF THAT PHONE NUMBER IS ALREADY IN USE
	const oldClient = await ClientModel.findOne({ phone: phoneSafe });
	if (oldClient) {
		return res.json({
			status: 500,
			message: 'That phone number is associated with another client.',
		});
	}

	// ADD NEW CLIENT
	const result = await new ClientModel({
		_id: new mongoose.Types.ObjectId(),
		firstName: firstNameSafe,
		lastName: lastNameSafe,
		email: emailSafe,
		phone: phoneSafe,
		address: addressSafe,
	}).save();

	return res.json(
		{
			status: 200,
			message: 'Success!',
			client: result,
		},
	);
});

router.post('/update-client-by-id', VerifyAuthToken, async (req, res) => {
	// RAW DATA
	const firstNameUnsafe = req.body.client.firstName;
	const lastNameUnsafe = req.body.client.lastName;
	const emailUnsafe = req.body.client.email;
	const phoneUnsafe = req.body.client.phone.toString().replace(/(\()/g, '').replace(/(\))/g, '').replace(/-/g, '')
		.replace(/ /g, '')
		.trim();
	const addressUnsafe = req.body.client.address;

	// VALIDATE INPUTS
	const errors = [];
	let separator = 'are';
	if (!Validator(firstNameUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('first name');
	if (!Validator(lastNameUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('last name');
	if (!Validator(phoneUnsafe, InputTypes.PHONE_INPUT)) errors.push('phone');
	if (emailUnsafe !== '') {
		if (!Validator(emailUnsafe, InputTypes.EMAIL_INPUT)) errors.push('email');
	}
	if (addressUnsafe !== '') {
		if (!Validator(addressUnsafe, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push('address');
	}
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return res.json({
			status: 500,
			message: `Valid ${errors.join(', ')} ${separator} required`,
		});
	}

	// ESCAPE & TRANSFORM INPUTS
	const firstNameSafe = escapeTool.escape(firstNameUnsafe);
	const lastNameSafe = escapeTool.escape(lastNameUnsafe);
	const phoneSafe = escapeTool.escape(phoneUnsafe);
	let emailSafe = '';
	if (emailUnsafe !== '') {
		emailSafe = escapeTool.escape(emailUnsafe);
	}
	let addressSafe = '';
	if (addressUnsafe !== '') {
		addressSafe = escapeTool.escape(addressUnsafe);
	}

	const result = await ClientModel.findByIdAndUpdate(
		req.body.client._id,
		{
			firstName: firstNameSafe,
			lastName: lastNameSafe,
			email: emailSafe,
			phone: phoneSafe,
			address: addressSafe,
		}, {
			useFindAndModify: false,
		},
	);

	if (!result) {
		return res.json({
			status: 500,
			message: "Can't Update Client.",
		});
	}

	return res.json({
		status: 200,
		message: 'Success!',
	});
});

module.exports = router;

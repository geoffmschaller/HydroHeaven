const express = require('express');
const router = express.Router();
const ClientModel = require('../models/clientModel');
const mongoose = require('mongoose');
const InputTypes = require('../utils/InputTypes');
const Validator = require('../utils/Validators');
const escapeTool = require('validator');
const VerifyAuthToken = require('../middleware/Auth');


router.post("/get-all-clients", VerifyAuthToken, async (req, res) => {
	let results = await ClientModel.find();
	return res.json(
		{
			status: 200,
			message: "Success!",
			clients: results
		}
	);
});

router.post("/get-client-by-id", VerifyAuthToken, async (req, res) => {
	let result = await ClientModel.findById(req.body.id);
	return res.json(
		{
			status: 200,
			message: "Success!",
			client: result
		}
	);
});

router.post("/add-new-client", VerifyAuthToken, async (req, res) => {

	// RAW DATA
	let firstName_UNSAFE = req.body.client.firstName;
	let lastName_UNSAFE = req.body.client.lastName;
	let email_UNSAFE = req.body.client.email;
	let phone_UNSAFE = req.body.client.phone.toString().replace(/(\()/g, "").replace(/(\))/g, "").replace(/-/g, "").replace(/ /g, "").trim();
	let address_UNSAFE = req.body.client.address;

	// VALIDATE INPUTS
	let errors = [];
	let separator = "are";
	if (!Validator(firstName_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("first name");
	if (!Validator(lastName_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("last name");
	if (!Validator(phone_UNSAFE, InputTypes.PHONE_INPUT)) errors.push("phone");
	if (email_UNSAFE !== "") {
		if (!Validator(email_UNSAFE, InputTypes.EMAIL_INPUT)) errors.push("email");
	}
	if (address_UNSAFE !== "") {
		if (!Validator(address_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("address");
	}
	if (errors.length > 0) {
		if (errors.length === 1) separator = "is";
		return res.json({
			status: 500,
			message: "Valid " + errors.join(", ") + " " + separator + " required"
		})
	}

	// ESCAPE & TRANSFORM INPUTS
	let firstName_SAFE = escapeTool.escape(firstName_UNSAFE);
	let lastName_SAFE = escapeTool.escape(lastName_UNSAFE);
	let phone_SAFE = escapeTool.escape(phone_UNSAFE);
	let email_SAFE = "";
	if (email_UNSAFE !== "") {
		email_SAFE = escapeTool.escape(email_UNSAFE);
	}
	let address_SAFE = "";
	if (address_UNSAFE !== "") {
		address_SAFE = escapeTool.escape(address_UNSAFE);
	}

	// CHECK IF THAT PHONE NUMBER IS ALREADY IN USE
	let oldClient = await ClientModel.findOne({phone: phone_SAFE});
	if (oldClient) {
		return res.json({
			status: 500,
			message: "That phone number is associated with another client."
		})
	}

	// ADD NEW CLIENT
	let result = await new ClientModel({
		_id: new mongoose.Types.ObjectId(),
		firstName: firstName_SAFE,
		lastName: lastName_SAFE,
		email: email_SAFE,
		phone: phone_SAFE,
		address: address_SAFE
	}).save();

	return res.json(
		{
			status: 200,
			message: "Success!",
			client: result
		}
	);

});

router.post("/update-client-by-id", VerifyAuthToken, async (req, res) => {

	// RAW DATA
	let firstName_UNSAFE = req.body.client.firstName;
	let lastName_UNSAFE = req.body.client.lastName;
	let email_UNSAFE = req.body.client.email;
	let phone_UNSAFE = req.body.client.phone.toString().replace(/(\()/g, "").replace(/(\))/g, "").replace(/-/g, "").replace(/ /g, "").trim();
	let address_UNSAFE = req.body.client.address;

	// VALIDATE INPUTS
	let errors = [];
	let separator = "are";
	if (!Validator(firstName_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("first name");
	if (!Validator(lastName_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("last name");
	if (!Validator(phone_UNSAFE, InputTypes.PHONE_INPUT)) errors.push("phone");
	if (email_UNSAFE !== "") {
		if (!Validator(email_UNSAFE, InputTypes.EMAIL_INPUT)) errors.push("email");
	}
	if (address_UNSAFE !== "") {
		if (!Validator(address_UNSAFE, InputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("address");
	}
	if (errors.length > 0) {
		if (errors.length === 1) separator = "is";
		return res.json({
			status: 500,
			message: "Valid " + errors.join(", ") + " " + separator + " required"
		})
	}

	// ESCAPE & TRANSFORM INPUTS
	let firstName_SAFE = escapeTool.escape(firstName_UNSAFE);
	let lastName_SAFE = escapeTool.escape(lastName_UNSAFE);
	let phone_SAFE = escapeTool.escape(phone_UNSAFE);
	let email_SAFE = "";
	if (email_UNSAFE !== "") {
		email_SAFE = escapeTool.escape(email_UNSAFE);
	}
	let address_SAFE = "";
	if (address_UNSAFE !== "") {
		address_SAFE = escapeTool.escape(address_UNSAFE);
	}

	let result = await ClientModel.findByIdAndUpdate(
		req.body.client._id,
		{
			firstName: firstName_SAFE,
			lastName: lastName_SAFE,
			email: email_SAFE,
			phone: phone_SAFE,
			address: address_SAFE
		}, {
			useFindAndModify: false
		});

	if (!result) {
		return res.json({
			status: 500,
			message: "Can't Update Client."
		})
	}

	return res.json({
		status: 200,
		message: "Success!"
	})

});

module.exports = router;
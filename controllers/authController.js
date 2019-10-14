const express = require("express");
const router = express.Router();
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('../utils/Validators');
const inputTypes = require('../utils/InputTypes');
const mongoose = require('mongoose');

require('dotenv').config();

router.post("/login", async (req, res) => {

	/*
		GET RAW INPUTS
		Raw values from the front end.
	 */
	let email_NOTSAFE = req.body.values[0].value;
	let password_NOTSAFE = req.body.values[1].value;

	/*
		VALIDATE INPUTS
		Validates raw inputs, returning errors.
	 */
	let errors = [];
	let separator = "are";
	if (!validator(email_NOTSAFE, inputTypes.EMAIL_INPUT)) errors.push("Email");
	if (!validator(password_NOTSAFE, inputTypes.NON_NUMERIC_TEXT_INPUT)) errors.push("Password");
	if (errors.length > 0) {
		if (errors.length === 1) separator = "is";
		return res.json({
			status: 500,
			message: "Valid " + errors.join(" and ") + " " + separator + " required"
		})
	}

	/*
		USER PULL FROM DB
		Gets user information from the database.
	 */
	let user = await UserModel.findOne({email: email_NOTSAFE});
	if (!user) return res.json({status: 500, message: "Email does not exist."});

	/*
		USER VALIDATION
		Checks the user's supplied password against stored.
	 */
	let passwordCheck = await bcrypt.compare(password_NOTSAFE, user.password);
	if (!passwordCheck) return res.json({status: 500, message: "Invalid Credentials."});

	/*
		GENERATE TOKEN
		After Successful Validation returns json token to Front End.
	 */
	let token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET_KEY);
	return res.json({status: 200, message: "Login Successful! Redirecting you now...", token: token});

});

module.exports = router;
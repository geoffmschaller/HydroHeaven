const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

router.post("/login", async (req, res) => {
	const fakeUser = {
		id: 123,
		name: "Geoff Schaller",
		email: "geoffmschaller@gmail.com",
		password: "Goleafsgo67"
	};

	let user = await UserModel.findOne({email: fakeUser.email});
	if (!user) return res.json({status: 400, message: "Invalid Email"});

	let passwordCompare = await bcrypt.compareSync(fakeUser.password, user.password);
	if (!passwordCompare) return res.json({status: 400, message: "Passwords do not match"});

	user.password = "";
	const token = await jwt.sign({user: user}, 'secret-key', {expiresIn: '30s'});
	res.json({user: user, token: token});
});

router.post('/sign-up', async (req, res) => {

	let email = "geoffmschaller@gmail.com";
	let name = "Geoff Schaller";
	let password = "Goleafsgo67";

	let hashedPassword = await bcrypt.hashSync(password, 10);

	let user = new UserModel({
		_id: new mongoose.Types.ObjectId(),
		name: name,
		email: email,
		password: hashedPassword
	});

	try {
		let result = await user.save();
		const token = await jwt.sign({user: result}, 'secret-key', {expiresIn: '30s'});
		return res.json({status: 200, message: token});
	} catch (e) {
		console.log(e);
		return res.json({status: 400, message: "ERROR!"});
	}

});

module.exports = router;
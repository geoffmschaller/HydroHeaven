const mongoose = require('mongoose');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const CreateUser = async (safeInputs) => {
	const user = new UserModel({
		_id: new mongoose.Types.ObjectId(),
		name: safeInputs.name,
		email: safeInputs.email,
		password: await bcrypt.hash("123", 10)
	});
	try {
		user.save();
		return 200;
	} catch (e) {
		return 500;
	}
};

const LogUserIn = async (safeInputs) => {

	let user;
	try {
		user = await UserModel.findOne({email: safeInputs.email});
	} catch (e) {
		return 500;
	}
	if (!user) return 500;

	let passwordCheck = await bcrypt.compare(safeInputs.password, user.password);
	if (!passwordCheck) return 500;

	return user;
};

module.exports = {LogUserIn, CreateUser};
const mongoose = require('mongoose');
const ContactModel = require('../models/contactModel');

const InsertNewContact = async (safeInputs) => {
	const con = new ContactModel({
		_id: new mongoose.Types.ObjectId(),
		name: safeInputs.name,
		email: safeInputs.email,
		message: safeInputs.message,
	});
	try {
		await con.save();
	} catch (e) {
		return 500;
	}
	return 200;
};

module.exports = {InsertNewContact};
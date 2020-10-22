const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContactSchema = new Schema({
	id: ObjectId,
	name: String,
	email: String,
	message: String,
	Date: {
		type: Date,
		default: new Date()
	}
});

const ContactModel = mongoose.model('Contacts', ContactSchema);

module.exports = ContactModel;
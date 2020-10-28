const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientModel = mongoose.model('Clients', new Schema({
	id: ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: String,
	address: String,
	city: String,
	state: {
		type: String,
		Default: "CA"
	},
	zip: String,
	contacts: [{
		message: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: new Date()
		}
	}],
	created: {
		type: Date,
		default: new Date()
	}
}));

module.exports = ClientModel;
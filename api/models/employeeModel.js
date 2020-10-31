const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const EmployeeModel = mongoose.model('Employees', new Schema({
	id: ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	accountStatus: {
		type: Boolean,
		default: true
	},
	currentToken: String,
	currentPin: String,
	loginAttempts: [{
		status: {
			type: String,
			required: true,
			enum: [200, 500]
		},
		message: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: new Date()
		}
	}],
	accountEvents: [
		{
			event: {
				type: String,
				required: true
			},
			date: {
				type: Date,
				default: new Date()
			}
		}
	],
	created: {
		type: Date,
		default: new Date()
	}
}));

module.exports = EmployeeModel;

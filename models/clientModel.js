const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: {type: String, required: true, max: 100},
	lastName: {type: String, required: true, max: 100},
	email: {type: String, max: 100},
	address: {type: String, max: 100},
	phone: {type: Number, required: true},
});

module.exports = mongoose.model('Client', ClientSchema);
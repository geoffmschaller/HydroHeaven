const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true, max: 100},
	email: {type: String, required: true, max: 100},
	message: {type: String, required: true},
});

module.exports = mongoose.model('Contact', ContactSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SpaDetailsSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	owner: {type: String, required: true},
	year: {type: Number, required: true},
	model: {type: String, required: true},
	make: {type: String, required: true},
	image: {type: String}
});

module.exports = mongoose.model('SpaDetails', SpaDetailsSchema);
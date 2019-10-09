const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
	name: {type: String, required: true, max: 100},
	email: {type: String, required: true, max: 100},
	message: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Contact', ContactSchema);
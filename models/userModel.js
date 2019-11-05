const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true, max: 100},
	email: {type: String, required: true, max: 100},
	password: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);
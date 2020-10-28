const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PageViewModel = mongoose.model('PageViews', new Schema({
	id: ObjectId,
	session: String,
	pages: [String],
	date: {
		type: Date,
		default: new Date()
	}
}));

module.exports = PageViewModel;
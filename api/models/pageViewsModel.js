const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PageViewSchema = new Schema({
	id: ObjectId,
	session: String,
	pages: [String],
	date: {
		type: Date,
		default: new Date()
	}
});

const PageViewModel = mongoose.model('PageViews', PageViewSchema);

module.exports = PageViewModel;
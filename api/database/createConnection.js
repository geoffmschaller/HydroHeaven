const mongoose = require('mongoose');

const createConnection = async () => {
	await mongoose.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});
}

module.exports = createConnection;
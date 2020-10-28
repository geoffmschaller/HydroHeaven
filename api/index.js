require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const assignRoutes = require('./routes');
const mongoose = require('mongoose');

const establishDBConnection = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
	} catch (e) {
		console.log(e);
	}
}

const launchServer = () => {

	const app = express();
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	
	assignRoutes(app);

	app.listen(5000);
}

const initializeApp = async () => {
	await establishDBConnection();
	launchServer();
}

initializeApp();
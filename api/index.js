require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const assignRoutes = require('./routes');
const mongoose = require('mongoose');
const createConnection = require('./database/createConnection');

const establishDBConnection = async () => {
	try {
		await createConnection();
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
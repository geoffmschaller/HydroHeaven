const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ContactController = require('./controllers/contactController');
const AuthController = require('./controllers/authController');

require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'options') {
		res.header('Access-Control-Allow-Methods', 'POST');
		return res.status(200).json({});
	}
	next();
});

app.use('/contact', ContactController);
app.use('/auth', AuthController);

app.listen(5000);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ContactController = require('./controllers/contactController');
const LoginController = require('./controllers/loginController');
const ResetPasswordController = require('./controllers/resetPasswordController');
const LogoutController = require('./controllers/logoutController');

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
app.use('/login', LoginController);
app.use('/logout', LogoutController);
app.use('/auth', ResetPasswordController);

app.listen(5000);

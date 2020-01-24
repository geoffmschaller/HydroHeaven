const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ContactController = require('./controllers/contactController');

require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(
	process.env.MONGO_DB_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
).then();

app.use('/contact', ContactController);

app.listen(5000);

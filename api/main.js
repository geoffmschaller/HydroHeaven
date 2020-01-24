const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ContactController = require('./controllers/contactController');

require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./Client/build'));

mongoose.connect(
	process.env.MONGO_DB_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
).then();

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './Client/build/index.html'));
});

app.use('/api/contact', ContactController);

app.listen(5000);

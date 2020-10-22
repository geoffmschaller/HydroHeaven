const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const contactController = require('./controllers/contactController');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'options') {
		res.header('Access-Control-Allow-Methods', 'POST');
		return res.status(200).json({});
	}
	next();
});

app.use("/contact", contactController);
app.listen(5000);
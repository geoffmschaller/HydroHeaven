const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ContactRouter = require('./controllers/contactController');
const AuthRouter = require('./controllers/authController');
const mongoose = require('mongoose');

require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./client/build'));

mongoose.connect(
	process.env.MONGO_DB_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	}
).then();

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.use("/api/contact", ContactRouter);
app.use("/api/auth", AuthRouter);

app.listen(4000);

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const APIRouter = require('./controllers/apiController');
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
);

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.use("/api", APIRouter);

app.listen(4000);
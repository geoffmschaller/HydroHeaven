const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const APIRouter = require('./controllers/apiController');


require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./client/build'));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.use("/api", APIRouter);

app.listen(4000);
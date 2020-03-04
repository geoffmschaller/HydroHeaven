import express, {Application, Response, Request, NextFunction} from 'express';
import bodyParser from "body-parser";

const app: Application = express();
const contactController = require('./controllers/contactController');

require('dotenv').config();
require('pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
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
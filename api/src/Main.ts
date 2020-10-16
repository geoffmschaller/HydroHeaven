import express, {Application, Response, Request, NextFunction} from 'express';
import bodyParser from "body-parser";
import ContactRouter from "./controllers/contact/ContactController";

require('dotenv').config();
require('pug');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const app: Application = express();
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

app.use("/contact", ContactRouter);

if (process.env.NODE_ENV != 'test') app.listen(5000);

export default app;
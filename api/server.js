const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const mailer = require('./mailer/mailer');
const yup = require('yup');

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

router.post('/', async (req, res) => {

	let schema = yup.object().shape({
		name: yup.string().trim().required().min(1).max(50),
		email: yup.string().trim().email().min(5).max(50),
		message: yup.string().trim().required().min(1).max(500),
	});
	let validatedInputs = {};
	try {
		validatedInputs = await schema.validate(req.body);
	} catch (err) {
		return res.json(err);
	}

	const ClientContactPayload = {
		from: {name: 'Hydro Heaven Spas', address: "mailer@hydroheavenspas.com"},
		to: validatedInputs.email,
		subject: "Message Received!",
		replyTo: "geoff@hydroheavenspas.com",
		template: {
			name: './mailer/views/outbound_contact.pug',
			engine: 'pug',
			context: {
				name: validatedInputs.name,
				email: validatedInputs.email,
				message: validatedInputs.message,
				header: "We have received your message!"
			}
		}
	}

	const HouseContactPayload = {
		from: {name: 'Clementine', address: "mailer@hydroheavenspas.com"},
		to: 'geoff@hydroheavenspas.com',
		subject: "New Message Received!",
		replyTo: validatedInputs.email,
		template: {
			name: './mailer/views/inbound_contact.pug',
			engine: 'pug',
			context: {
				name: validatedInputs.name,
				email: validatedInputs.email,
				message: validatedInputs.message,
				header: "New message from website!"
			}
		}
	}

	await mailer(HouseContactPayload);
	await mailer(ClientContactPayload);

	res.json({errors: [], message: "Thank you! We have received your message!"});

});


app.use("/contact/new", router);
app.listen(5000);
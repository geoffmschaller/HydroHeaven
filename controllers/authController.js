const express = require('express');
const router = express.Router();
const APIResponses = require('../responses/responses');
const InputTypes = require('../types/inputs');

router.post('/login', async (req, res) => {

	// RAW INPUTS
	const unsafeInputs = {
		email: {
			type: InputTypes.EMAIL_INPUT,
			value: req.body.email,
			name: "email"
		},
		password: {
			type: InputTypes.NON_NUMERIC_TEXT_INPUT,
			value: req.body.password,
			name: "message"
		}
	};

});

module.exports = router;
const express = require('express');
const router = express.Router();
const ClientModel = require('../models/clientModel');
const mongoose = require('mongoose');

router.post("/get-all-clients", async (req, res) => {
	let results = await ClientModel.find();
	return res.json(
		{
			status: 200,
			message: "Success!",
			clients: results
		}
	);
});

router.post("/get-client-by-id", async (req, res) => {
	let result = await ClientModel.findById(req.body.id);
	return res.json(
		{
			status: 200,
			message: "Success!",
			client: result
		}
	);
});

router.post("/add-new-client", async (req, res) => {

	let result = await new ClientModel({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.client.firstName,
		lastName: req.body.client.lastName,
		email: req.body.client.email,
		phone: req.body.client.phone,
		address: req.body.client.address
	}).save();

	console.log(result);

	return res.json(
		{
			status: 200,
			message: "Success!",
			client: result
		}
	);

});

module.exports = router;
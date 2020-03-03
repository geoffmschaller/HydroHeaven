const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/', async (req, res) => {

	return res.json({result: "true"});

});

module.exports = router;
const express = require('express');
const router = express.Router();
const IDGenerator = require('../utils/idGenerator');

router.post('/', async (req, res) => {

	return res.json({result: await IDGenerator.generateUserId(20)});

});

module.exports = router;
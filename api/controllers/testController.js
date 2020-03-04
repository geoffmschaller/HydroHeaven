const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

	return res.json({result: "true"});

});

module.exports = router;
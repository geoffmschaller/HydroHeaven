const express = require('express');
const router = express.Router();
const tokenMiddleware = require('../middleware/tokenMiddleware');

router.post('/secret', tokenMiddleware.getAuthToken, tokenMiddleware.verifyAuthToken, (req, res) => {
	res.json({secret: "This is the secret!"});
});

module.exports = router;
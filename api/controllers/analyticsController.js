const express = require('express');
const validator = require('../validators/pageViewValidator');
const pageViewsModel = require('../models/pageViewsModel');
const apiResponse = require('../responses/apiResponse');

const router = express.Router();

router.post('/page-view', async (req, res) => {

	// VALIDATE INPUT
	const valid_result = await validator(req.body);
	if (valid_result !== 200) return apiResponse(res, {
		name: "Validation Error",
		status_code: 500,
		values: valid_result.value,
		errors: valid_result.errors,
		message: valid_result.message
	});

	// SEND TO DB
	const session = await pageViewsModel.findOne({ session: req.body.session.toString() }).exec();
	if (!session)
		await new pageViewsModel({ session: req.body.session, pages: [req.body.page] }).save();
	else {
		session.pages.push(req.body.page.toString());
		await session.save();
	}
	
	return apiResponse(res, {
		name: "Analytics Updated",
		status_code: 200,
		values: valid_result.value,
		errors: valid_result.errors,
		message: valid_result.message
	});

});

module.exports = router;
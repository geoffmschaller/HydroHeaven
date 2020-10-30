const express = require('express');
const validator = require('../validators/pageViewValidator');
const PageViewsModel = require('../models/pageViewsModel');
const apiResponse = require('../responses/apiResponse');

const router = express.Router();

router.post('/page-view', async (req, res) => {
	const validResult = await validator(req.body);
	if (validResult !== 200) {
		return apiResponse(res, {
			name: 'Validation Error',
			status_code: 500,
			values: validResult.value,
			errors: validResult.errors,
			message: validResult.message
		});
	}
	const session = await PageViewsModel.findOne({ session: req.body.session.toString() }).exec();
	if (!session) {
		await new PageViewsModel({ session: req.body.session, pages: [req.body.page] }).save();
	}
	else {
		session.pages.push(req.body.page.toString());
		await session.save();
	}
	return apiResponse(res, {
		name: 'Analytics Updated',
		status_code: 200,
		values: validResult.value,
		errors: validResult.errors,
		message: validResult.message
	});
});

module.exports = router;
import express, {Request, Response} from 'express';
import Sanitizer from "../utils/Sanitizer";
import TextValidator from "../validators/TextValidator";
import APIResponse from "../responses/APIResponse";
import {DBMessages} from "../utils/Constants";
import PageViewModel from "../models/PageViewModel";
import PageViewAdapter from "../adapters/PageViewAdapter";
import NumberValidator from "../validators/NumberValidator";

const AnalyticsController = express.Router();

AnalyticsController.post("/page-view/new", async (req: Request, res: Response) => {

	// GET PAGE
	const submittedPage = Sanitizer(req.body.page, undefined, ["/"]);

	if (!TextValidator(submittedPage)) return APIResponse.error(res, "No page submitted.");

	// GENERATE AND SAVE
	const view = new PageViewModel(submittedPage);
	const saveResult = await new PageViewAdapter().save(view);

	switch (saveResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "Could not connect");
		case DBMessages.SAVE_ERROR:
			return APIResponse.error(res, "DB Error: Could not save");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully logged");
		default:
			return APIResponse.error(res, "Generic Error");
	}

});

AnalyticsController.post("/page-view/count", async (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	let submittedStart: number | undefined = req.body.start;
	let submittedEnd: number | undefined = req.body.end;

	if (!submittedStart && submittedEnd) return APIResponse.error(res, "Submitted End and no Start");
	if (submittedStart && !NumberValidator(submittedStart)) return APIResponse.error(res, "Invalid Start Param");
	if (submittedEnd && !NumberValidator(submittedEnd)) return APIResponse.error(res, "Invalid End Param");
	if (submittedStart && submittedEnd && submittedEnd > submittedStart) return APIResponse.error(res, "End days must be less then start");


	// COUNT
	const groupedResult = await new PageViewAdapter().group(submittedStart, submittedEnd);
	switch (groupedResult.status) {
		case DBMessages.CONNECTION_FAILURE:
			return APIResponse.error(res, "Could not connect");
		case DBMessages.SAVE_ERROR:
			return APIResponse.error(res, "DB Error: Could not save");
		case DBMessages.SUCCESS:
			return APIResponse.success(res, "Successfully connected", {views: groupedResult.payload});
		default:
			return APIResponse.error(res, "Generic Error");
	}

});


export default AnalyticsController;
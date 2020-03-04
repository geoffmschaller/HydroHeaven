import express, {Request, Response} from 'express';
import APISuccess from "../responses/APISuccess";
import APIError from "../responses/APIError";
import TextValidator from "../validators/TextValidator";
import EmailValidator from "../validators/EmailValidator";

const router = express.Router();

router.post("/new", (req: Request, res: Response) => {

	console.log(new EmailValidator("geoff@geoff..").validate());


	return new APISuccess(res, "success");

});

module.exports = router;
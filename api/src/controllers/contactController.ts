import express, {Request, Response} from 'express';
import APISuccess from "../responses/APISuccess";

const router = express.Router();

router.post("/new", async (req: Request, res: Response) => {

	return new APISuccess(res, "success");

});

module.exports = router;
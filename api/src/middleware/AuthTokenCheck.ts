import {Response, Request, NextFunction} from 'express';

const AuthTokenCheck = (req: Request, res: Response, next: NextFunction) => {

	// GET AUTH TOKEN
	const token = req.body.token;

	next();

};

export default AuthTokenCheck;
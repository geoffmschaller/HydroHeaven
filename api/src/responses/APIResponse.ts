import {Response} from 'express';

class APIResponse {

	static error = (res: Response, message: string, payload?: any): Response => {
		return res.status(200).json({
			status: 500,
			message: message,
			payload: payload
		});
	};

	static success = (res: Response, message: string, payload?: any): Response => {
		return res.status(200).json({
			status: 200,
			message: message,
			payload: payload
		});
	}

}

export default APIResponse;
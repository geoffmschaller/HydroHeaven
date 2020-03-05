import {Response} from 'express';
import Timer from "../utils/timer";

class APIResponse {

	static error = (res: Response, message: string, payload?: any): Response => {
		return res.status(500).json({
			status: 500,
			time: Timer.dateTime(),
			message: message,
			payload: payload
		});
	};

	static success = (res: Response, message: string, payload?: any): Response => {
		return res.status(200).json({
			status: 200,
			time: Timer.dateTime(),
			message: message,
			payload: payload
		});
	}

}

export default APIResponse;
import {Response} from 'express';
import Timer from "../utils/timer";

class APIResponse {
	response: Response;
	status: number;
	message: string;
	payload?: object;

	constructor(response: Response, status: number, message: string, payload?: object) {
		this.response = response;
		this.status = status;
		this.message = message;
		this.payload = payload;
		this.send();
	}

	send = (): Response => {
		return this.response.status(this.status).json({
			time: new Timer().dateTime(),
			message: this.message,
			payload: this.payload
		});
	}

}

export default APIResponse;
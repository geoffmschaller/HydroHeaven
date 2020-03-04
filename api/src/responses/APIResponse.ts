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
	}

	send = (): Response => {
		return this.response.send({
			status: this.status,
			time: new Timer().dateTime(),
			message: this.message,
			payload: this.payload,
		})
	}

}

export default APIResponse;
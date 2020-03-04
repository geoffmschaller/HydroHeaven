import {Response} from "express";
import APIResponse from "./APIResponse";

class APIError extends APIResponse {
	constructor(response: Response, message: string, payload?: object) {
		super(response, 500, message, payload);
	}
}

export default APIError;
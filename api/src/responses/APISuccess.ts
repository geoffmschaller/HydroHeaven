import {Response} from "express";
import APIResponse from "./APIResponse";

class APISuccess extends APIResponse {
	constructor(response: Response, message: string, payload?: object) {
		super(response, 200, message, payload);
	}
}

export default APISuccess;
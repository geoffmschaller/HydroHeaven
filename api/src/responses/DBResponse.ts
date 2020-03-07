import {DBMessages} from "../utils/Constants";


class DBResponse {

	status: DBMessages;
	payload?: any;

	constructor(status: DBMessages, payload?: any) {
		this.status = status;
		this.payload = payload;
	}

}

export default DBResponse;
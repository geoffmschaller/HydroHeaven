import Constants from "../utils/constants";

class DBResponse {

	status: Constants;
	payload?: any;

	constructor(status: Constants, payload?: any) {
		this.status = status;
		this.payload = payload;
	}

}

export default DBResponse;
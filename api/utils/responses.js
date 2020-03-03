const {EnvironmentTypes} = require('../utils/constants');

class APIResponse {

	static Error = (res, devMessage = "", prodMessage = "", payload = {}) => {
		return res.json({
			status: 500,
			message: process.env === EnvironmentTypes.PRODUCTION ? prodMessage : devMessage,
			payload: payload
		})
	};

	static Success = (res, message = "", payload = {}) => {
		return res.json({
			status: 200,
			message: message,
			payload: payload
		})
	};

}

module.exports = APIResponse;
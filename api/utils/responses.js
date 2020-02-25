class APIResponse {

	static Error = (res, message = "", payload = []) => {
		return res.json({
			status: 500,
			message: message,
			payload: payload
		})
	};

	static Success = (res, message = "", payload = []) => {
		return res.json({
			status: 200,
			message: message,
			payload: payload
		})
	};

}

module.exports = APIResponse;
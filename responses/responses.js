const ValidationErrorResponse = (res, message) => {
	return res.json({
		status: 500,
		message: message,
		payload: null
	});
};

const NetworkErrorResponse = (res) => {
	return res.json({
		status: 500,
		message: "Network Error: Please try again.",
		payload: null
	});
};

const DatabaseErrorResponse = (res) => {
	return res.json({
		status: 500,
		message: "Database Error: Please try again.",
		payload: null
	});
};

const AuthorizationErrorResponse = (res) => {
	return res.json({
		status: 500,
		message: "Invalid Credentials. Please try again.",
		payload: null
	});
};

const SuccessfulResponse = (res, message, data = {}) => {
	return res.json({
		status: 200,
		message: message,
		payload: data
	});
};

module.exports = {
	ValidationErrorResponse,
	NetworkErrorResponse,
	DatabaseErrorResponse,
	SuccessfulResponse,
	AuthorizationErrorResponse
};
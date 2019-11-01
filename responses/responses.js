const ValidationErrorResponse = (res, message) => {
	return res.json({
		status: 500,
		message: message,
		data: null
	});
};

const NetworkErrorResponse = (res) => {
	return res.json({
		status: 500,
		message: "Network Error: Please try again.",
		data: null
	});
};

const DatabaseErrorResponse = (res) => {
	return res.json({
		status: 500,
		message: "Database Error: Please try again.",
		data: null
	});
};

const SuccessfulResponse = (res, message, data = null) => {
	return res.json({
		status: 200,
		message: message,
		data: data
	});
};

module.exports = {ValidationErrorResponse, NetworkErrorResponse, DatabaseErrorResponse, SuccessfulResponse};
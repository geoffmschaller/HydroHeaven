const apiResponse = (res, responseObject) => res.json({
	name: responseObject.name,
	status_code: responseObject.status_code,
	values: responseObject.values,
	errors: responseObject.errors,
	message: responseObject.message
});

module.exports = apiResponse;

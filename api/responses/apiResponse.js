const apiResponse = (res, response_object) => {
	return res.json({
		"name": response_object.name,
		"status_code": response_object.status_code,
		"values": response_object.values,
		"errors": response_object.errors,
		"message": response_object.message
	});
}

module.exports = apiResponse;
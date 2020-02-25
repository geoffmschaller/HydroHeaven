const escapeTool = require('validator');

class Sanitizer {

	static sanitizeInput = (input) => {
		return escapeTool.escape(input.toString().replace(/([\\<>()`/])/g, " ").trim());
	};

}

module.exports = Sanitizer;
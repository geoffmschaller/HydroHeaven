const escapeTool = require('validator');

class Sanitizer {

	static sanitizeInput = (input) => {
		try {
			return escapeTool.escape(input.toString().replace(/([\\<>()|&`/])/g, " ").trim());
		} catch (e) {
			return "";
		}

	};

}

module.exports = Sanitizer;
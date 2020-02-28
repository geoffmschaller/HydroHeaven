const escapeTool = require('validator');

class Sanitizer {

	static sanitizeText = (text) => {
		try {
			return escapeTool.escape(text.toString().replace(/([\\<>()|&`/])/g, "").trim());
		} catch (e) {
			return "";
		}
	};

}

module.exports = Sanitizer;
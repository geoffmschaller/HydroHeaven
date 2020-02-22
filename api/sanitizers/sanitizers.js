const escapeTool = require('validator');

const cleanInputs = (unsafeInputs) => {
	const safeInputs = {};
	Object.keys(unsafeInputs).map((key, index) => {
		safeInputs[key] = escapeTool.escape(unsafeInputs[key].value.toString().replace(/([\\<>()`/])/g, " ").trim());
	});
	return safeInputs;
};

module.exports = {cleanInputs};
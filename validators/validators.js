const escapeTool = require('validator');
const InputTypes = require('../types/inputs');

const validateInputs = (unsafeInputs) => {
	const errors = [];
	let separator = 'are';
	Object.keys(unsafeInputs).map((key, index) => {
		let inp = unsafeInputs[key];
		if (inp.type === InputTypes.NON_NUMERIC_TEXT_INPUT && !validateText(inp.value)) errors.push(inp.name.toString());
		if (inp.type === InputTypes.EMAIL_INPUT && !validateEmail(inp.value)) errors.push(inp.name);
	});
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return `Valid ${errors.join(', ')} ${separator} required`;
	}
	return 200;
};

const cleanInputs = (unsafeInputs) => {
	const safeInputs = {};
	Object.keys(unsafeInputs).map((key, index) => {
		safeInputs[key] = escapeTool.escape(unsafeInputs[key].toString().replace(/([\\<>()`/])/g, " ").trim());
	});
	return safeInputs;
};

const validateText = (input) => !(input === null || input === '' || typeof input !== 'string');

const validateEmail = (input) => {
	if (input === null || input === '' || typeof input !== 'string' || input.indexOf('@') < 0 || input.indexOf('.') < 0) return false;
	const split = input.split('@');
	if (split.length !== 2) return false;
	if (split[0] === null || split[0] === '' || typeof split[0] !== 'string') return false;
	const domain = split[1].split('.');
	if (domain.length < 2) return false;
	return !(domain[0] === null || domain[0] === '' || typeof domain[0] !== 'string');
};

module.exports = {validateInputs, cleanInputs};

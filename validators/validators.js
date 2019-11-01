const escapeTool = require('validator');
const NON_NUMERIC_TEXT_INPUT = 'text_input';
const EMAIL_INPUT = 'email_input';
const PHONE_INPUT = 'phone_input';

const nonNumericTextInput = (input) => !(input === null || input === '' || typeof input !== 'string');

const emailValidation = (input) => {
	if (input === null || input === '' || typeof input !== 'string' || input.indexOf('@') < 0 || input.indexOf('.') < 0) return false;
	const split = input.split('@');
	if (split.length !== 2) return false;
	if (split[0] === null || split[0] === '' || typeof split[0] !== 'string') return false;
	const domain = split[1].split('.');
	if (domain.length < 2) return false;
	return !(domain[0] === null || domain[0] === '' || typeof domain[0] !== 'string');
};

const phoneValidation = (input) => {
	return !(input === null || input === '' || input.length < 10);
};

const validate = (input, type) => {
	if (type === NON_NUMERIC_TEXT_INPUT) return nonNumericTextInput(input);
	if (type === PHONE_INPUT) return phoneValidation(input);
	return emailValidation(input);
};

const ValidateInputs = (unsafeInputs) => {
	const errors = [];
	let separator = 'are';
	if (!validate(unsafeInputs.name, NON_NUMERIC_TEXT_INPUT)) errors.push('Name');
	if (!validate(unsafeInputs.email, EMAIL_INPUT)) errors.push('Email');
	if (!validate(unsafeInputs.message, NON_NUMERIC_TEXT_INPUT)) errors.push('Message');
	if (errors.length > 0) {
		if (errors.length === 1) separator = 'is';
		return `Valid ${errors.join(', ')} ${separator} required`;
	}
	return 200;
};

const CleanInputs = (unsafeInputs) => {
	const safeInputs = {};
	Object.keys(unsafeInputs).map((key, index) => {
		safeInputs[key] = escapeTool.escape(unsafeInputs[key].toString().replace(/([\\<>()`/])/g, " "));
	});
	return safeInputs;
};

module.exports = {ValidateInputs, CleanInputs};
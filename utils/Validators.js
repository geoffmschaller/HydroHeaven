const InputTypes = require('./InputTypes');

const nonNumericTextInput = (input) => !(input === null || input === '' || typeof input !== 'string');

const emailValidation = (input) => {
	if (input === null || input === '' || typeof input !== 'string' || input.indexOf('@') < 0 || input.indexOf('.') < 0) return false;
	const split = input.split('@');
	if (split.length !== 2) return false;
	if (split[0] === null || split[0] === '' || typeof split[0] !== 'string') return false;
	const domain = split[1].split('.');
	if (domain.length < 2) return false;
	if (domain[0] === null || domain[0] === '' || typeof domain[0] !== 'string') return false;

	return true;
};

const phoneValidation = (input) => {
	if (input === null || input === '' || input.length < 10) return false;
	return true;
};

const validate = (input, type) => {
	if (type === InputTypes.NON_NUMERIC_TEXT_INPUT) return nonNumericTextInput(input);
	if (type === InputTypes.PHONE_INPUT) return phoneValidation(input);
	return emailValidation(input);
};

module.exports = validate;

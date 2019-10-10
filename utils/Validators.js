let InputTypes = require('./InputTypes');

/*
	MAIN VALIDATION FUNCTION
	Main validation for input and type.
 */
const validate = (input, type) => {
	if (type === InputTypes.NON_NUMERIC_TEXT_INPUT) return nonNumericTextInput(input);
	return emailValidation(input);
};

const nonNumericTextInput = (input) => {
	return !(input === null || input === "" || typeof input !== 'string');
};
const emailValidation = (input) => {

	if (input === null || input === "" || typeof input !== 'string' || input.indexOf("@") < 0 || input.indexOf(".") < 0) return false;
	let split = input.split("@");
	if (split.length !== 2) return false;
	if (split[0] === null || split[0] === "" || typeof split[0] !== 'string') return false;
	let domain = split[1].split(".");
	if (domain.length < 2) return false;
	if (domain[0] === null || domain[0] === "" || typeof domain[0] !== 'string') return false;

	return true;
};

module.exports = validate;
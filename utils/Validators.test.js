let validator = require('./Validators');
let inputTypes = require('./InputTypes');

test("Test Input Validator", () => {

	/*
		NON NUMERIC TEXT VALIDATIONS
	 */
	expect(validator("Geoff", inputTypes.NON_NUMERIC_TEXT_INPUT)).toBeTruthy();
	expect(validator("James", inputTypes.NON_NUMERIC_TEXT_INPUT)).toBeTruthy();
	expect(validator("", inputTypes.NON_NUMERIC_TEXT_INPUT)).toBeFalsy();
	expect(validator(null, inputTypes.NON_NUMERIC_TEXT_INPUT)).toBeFalsy();
	expect(validator(123, inputTypes.NON_NUMERIC_TEXT_INPUT)).toBeFalsy();

	/*
		EMAIL VALIDATIONS
	 */
	expect(validator("Geoff", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator(null, inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator(123, inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("Geoff@", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("Geoff.", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("@.", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator(".", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("@", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("Geoff@Geoff", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("Geoff.Geoff", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("@Geoff.com", inputTypes.EMAIL_INPUT)).toBeFalsy();
	expect(validator("geoff@geoff.com", inputTypes.EMAIL_INPUT)).toBeTruthy();
	expect(validator("carl@carl.com", inputTypes.EMAIL_INPUT)).toBeTruthy();

});

const Validator = require('../utils/validator');

it("User Input Validator", () => {

	// VALIDATE PLAIN TEXT
	expect(Validator.validateText("Geoff")).toBeTruthy();
	expect(Validator.validateText("Test Input")).toBeTruthy();
	expect(Validator.validateText("")).toBeFalsy();
	expect(Validator.validateText(null)).toBeFalsy();
	expect(Validator.validateText("@!<>")).toBeTruthy();

	// VALIDATE EMAIL ADDRESSES
	expect(Validator.validateEmail("email@email.com")).toBeTruthy();
	expect(Validator.validateEmail("email2@email2.com")).toBeTruthy();
	expect(Validator.validateEmail("")).toBeFalsy();
	expect(Validator.validateEmail(null)).toBeFalsy();
	expect(Validator.validateEmail("g@g")).toBeFalsy();
	expect(Validator.validateEmail("g.g.com")).toBeFalsy();
	expect(Validator.validateEmail("g.com")).toBeFalsy();
	expect(Validator.validateEmail(".")).toBeFalsy();
	expect(Validator.validateEmail("@")).toBeFalsy();
	expect(Validator.validateEmail("@.")).toBeFalsy();

});
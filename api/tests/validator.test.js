const Validator = require('../utils/validator');

describe("Validator Class", () => {

	test("Valid Text", () => {
		expect(Validator.validateText("Geoff")).toBeTruthy();
		expect(Validator.validateText("Test Input")).toBeTruthy();
	});

	test("Empty Text", () => {
		expect(Validator.validateText("")).toBeFalsy();
	});

	test("Null Text", () => {
		expect(Validator.validateText(null)).toBeFalsy();
	});

	test("Symbol Text", () => {
		expect(Validator.validateText("@!<>")).toBeTruthy();
	});

	test("Valid Email", () => {
		expect(Validator.validateEmail("email@email.com")).toBeTruthy();
		expect(Validator.validateEmail("email2@email2.com")).toBeTruthy();
	});

	test("Empty Email", () => {
		expect(Validator.validateEmail("")).toBeFalsy();
	});

	test("Null Email", () => {
		expect(Validator.validateEmail(null)).toBeFalsy();
	});

	test("Missing .", () => {
		expect(Validator.validateEmail("g@g")).toBeFalsy();
	});

	test("Missing . for @", () => {
		expect(Validator.validateEmail("g.g.com")).toBeFalsy();
	});

	test("Missing @", () => {
		expect(Validator.validateEmail("g.com")).toBeFalsy();
	});

	test("Only .", () => {
		expect(Validator.validateEmail(".")).toBeFalsy();
	});

	test("Only @", () => {
		expect(Validator.validateEmail("@")).toBeFalsy();
	});

	test("Only @.", () => {
		expect(Validator.validateEmail("@.")).toBeFalsy();
	});

});
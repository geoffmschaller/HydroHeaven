import TextValidator from "../validators/TextValidator";

describe("Text Validator Suite", () => {

	test("Successful Test", () => {
		expect(TextValidator.validate("this is a string")).toBeTruthy();
		expect(TextValidator.validate("yet another string")).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(TextValidator.validate("")).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(TextValidator.validate("    ")).toBeFalsy();
	});

});
import TextValidator from "../validators/TextValidator";

describe("Text Validator Suite", () => {

	test("Successful Test", () => {
		expect(TextValidator("this is a string")).toBeTruthy();
		expect(TextValidator("yet another string")).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(TextValidator("")).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(TextValidator("    ")).toBeFalsy();
	});

	test("Min Test", () => {
		expect(TextValidator("012345678", null, 10)).toBeFalsy();
		expect(TextValidator("0123456789", null, 10)).toBeTruthy();
	});

	test("Max Test", () => {
		expect(TextValidator("0123456789", 9)).toBeFalsy();
		expect(TextValidator("012345678", 9)).toBeTruthy();
	});

	test("Min and Max Test", () => {
		expect(TextValidator("0123", 9, 4)).toBeTruthy();
		expect(TextValidator("01", 9, 3)).toBeFalsy();
		expect(TextValidator("01234567890123", 9, 3)).toBeFalsy();
	});

});
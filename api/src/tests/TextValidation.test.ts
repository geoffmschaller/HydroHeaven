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

});
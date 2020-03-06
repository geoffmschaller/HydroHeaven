import NumberValidator from "../validators/NumberValidator";

describe("Number Validator Suite", () => {

	test("Numbers", () => {
		expect(NumberValidator(23)).toBeTruthy();
		expect(NumberValidator(45)).toBeTruthy();
		expect(NumberValidator(0)).toBeTruthy();
	});

	test("Successful Strings", () => {
		expect(NumberValidator("23")).toBeTruthy();
		expect(NumberValidator("45")).toBeTruthy();
		expect(NumberValidator("0")).toBeTruthy();
	});

	test("Invalid Strings", () => {
		expect(NumberValidator("test")).toBeFalsy();
		expect(NumberValidator("test2")).toBeFalsy();
		expect(NumberValidator("test3")).toBeFalsy();
	});

});
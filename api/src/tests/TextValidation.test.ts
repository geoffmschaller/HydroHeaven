import TextValidator from "../validators/TextValidator";

describe("Text Validator Suite", () => {

	test("Successful Test", () => {
		expect(new TextValidator("this is a string").validate()).toBeTruthy();
		expect(new TextValidator("yet another string").validate()).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(new TextValidator("").validate()).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(new TextValidator("    ").validate()).toBeFalsy();
	});

});
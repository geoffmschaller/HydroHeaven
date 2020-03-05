import EmailValidator from "../validators/EmailValidator";

describe("Email Validator Suite", () => {

	test("Valid Email", () => {
		expect(EmailValidator.validate("test@test.com")).toBeTruthy();
		expect(EmailValidator.validate("test2@test2.com")).toBeTruthy();
		expect(EmailValidator.validate("test2@test2.test2.com")).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(EmailValidator.validate("")).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(EmailValidator.validate("     ")).toBeFalsy();
	});

	test("No @ or .", () => {
		expect(EmailValidator.validate("test")).toBeFalsy();
	});

	test("No @", () => {
		expect(EmailValidator.validate("test.")).toBeFalsy();
	});

	test("No .", () => {
		expect(EmailValidator.validate("test@")).toBeFalsy();
	});

	test("Multiple @", () => {
		expect(EmailValidator.validate("test@test@test.com")).toBeFalsy();
	});

	test("No user", () => {
		expect(EmailValidator.validate("@test.com")).toBeFalsy();
	});

	test("No company", () => {
		expect(EmailValidator.validate("test@.com")).toBeFalsy();
	});

	test("No domain", () => {
		expect(EmailValidator.validate("test@test.")).toBeFalsy();
	});

	test("No user, company or domain", () => {
		expect(EmailValidator.validate("@.")).toBeFalsy();
	});

});
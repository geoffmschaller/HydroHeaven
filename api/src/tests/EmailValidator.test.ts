import EmailValidator from "../validators/EmailValidator";

describe("Email Validator Suite", () => {

	test("Valid Email", () => {
		expect(EmailValidator("test@test.com")).toBeTruthy();
		expect(EmailValidator("test2@test2.com")).toBeTruthy();
		expect(EmailValidator("test2@test2.test2.com")).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(EmailValidator("")).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(EmailValidator("     ")).toBeFalsy();
	});

	test("No @ or .", () => {
		expect(EmailValidator("test")).toBeFalsy();
	});

	test("No @", () => {
		expect(EmailValidator("test.")).toBeFalsy();
	});

	test("No .", () => {
		expect(EmailValidator("test@")).toBeFalsy();
	});

	test("Multiple @", () => {
		expect(EmailValidator("test@test@test.com")).toBeFalsy();
	});

	test("No user", () => {
		expect(EmailValidator("@test.com")).toBeFalsy();
	});

	test("No company", () => {
		expect(EmailValidator("test@.com")).toBeFalsy();
	});

	test("No domain", () => {
		expect(EmailValidator("test@test.")).toBeFalsy();
	});

	test("No user, company or domain", () => {
		expect(EmailValidator("@.")).toBeFalsy();
	});

});
import EmailValidator from "../validators/EmailValidator";

describe("Email Validator Suite", () => {

	test("Valid Email", () => {
		expect(new EmailValidator("test@test.com").validate()).toBeTruthy();
		expect(new EmailValidator("test2@test2.com").validate()).toBeTruthy();
		expect(new EmailValidator("test2@test2.test2.com").validate()).toBeTruthy();
	});

	test("Empty Test", () => {
		expect(new EmailValidator("").validate()).toBeFalsy();
	});

	test("Trim Test", () => {
		expect(new EmailValidator("     ").validate()).toBeFalsy();
	});

	test("No @ or .", () => {
		expect(new EmailValidator("test").validate()).toBeFalsy();
	});

	test("No @", () => {
		expect(new EmailValidator("test.").validate()).toBeFalsy();
	});

	test("No .", () => {
		expect(new EmailValidator("test@").validate()).toBeFalsy();
	});

	test("Multiple @", () => {
		expect(new EmailValidator("test@test@test.com").validate()).toBeFalsy();
	});

	test("No user", () => {
		expect(new EmailValidator("@test.com").validate()).toBeFalsy();
	});

	test("No company", () => {
		expect(new EmailValidator("test@.com").validate()).toBeFalsy();
	});

	test("No domain", () => {
		expect(new EmailValidator("test@test.").validate()).toBeFalsy();
	});

	test("No user, company or domain", () => {
		expect(new EmailValidator("@.").validate()).toBeFalsy();
	});

});
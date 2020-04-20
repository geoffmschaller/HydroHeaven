import EmailValidator from '../validators/EmailValidator';

describe("Email Validation Suite", () => {

    test("Empty, Null, and Undefined Tests", () => {
		expect(EmailValidator("")).toBeFalsy();
		expect(EmailValidator(undefined)).toBeFalsy();
		expect(EmailValidator(null)).toBeFalsy();
		expect(EmailValidator(" ")).toBeFalsy();
		expect(EmailValidator(" " + " ")).toBeFalsy();
		expect(EmailValidator("\ ")).toBeFalsy();
	});
	
	test("Malformed Construction Tests", () => {
		expect(EmailValidator("test test")).toBeFalsy();
		expect(EmailValidator("test")).toBeFalsy();
		expect(EmailValidator("test.com")).toBeFalsy();
		expect(EmailValidator("test.")).toBeFalsy();
		expect(EmailValidator("test.test.")).toBeFalsy();
		expect(EmailValidator("test.test")).toBeFalsy();
		expect(EmailValidator("test..")).toBeFalsy();
		expect(EmailValidator("test..test")).toBeFalsy();
		expect(EmailValidator("test@test")).toBeFalsy();
		expect(EmailValidator("test@")).toBeFalsy();
		expect(EmailValidator("@test")).toBeFalsy();
		expect(EmailValidator("test@test.")).toBeFalsy();
	});

	test("Successful Emails Validations", () => {
		expect(EmailValidator("test@test.com")).toBeTruthy();
		expect(EmailValidator("test2@test.com")).toBeTruthy();
	});

});
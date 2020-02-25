const Validators = require('../utils/validator');
const ImportTypes = require('../utils/constants');

it("User Input Validator", () => {

	expect(Validators.validateInputs({name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "Geoff", name: "name"}})).toBe(200);
	expect(Validators.validateInputs({name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "name"}})).toBe("Valid name is required");
	expect(Validators.validateInputs({name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "", name: "name"}})).toBe("Valid name is required");

	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "Geoff@Geoff.com", name: "email"}})).toBe(200);
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "Geoff@Geoff", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "Geoff", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "@", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "@.", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: ".", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: "", name: "email"}})).toBe("Valid email is required");
	expect(Validators.validateInputs({email: {type: ImportTypes.EMAIL_INPUT, value: null, name: "email"}})).toBe("Valid email is required");

	expect(Validators.validateInputs({message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "Geoff", name: "message"}})).toBe(200);
	expect(Validators.validateInputs({message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "message"}})).toBe("Valid message is required");
	expect(Validators.validateInputs({message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "", name: "message"}})).toBe("Valid message is required");

	expect(Validators.validateInputs({
		message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "message"},
		name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "name"},
		email: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "email"}
	})).toBe("Valid message, name, email are required");
	expect(Validators.validateInputs({
		message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: null, name: "message"},
		name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "Geoff", name: "name"},
		email: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "geoff@geoff.com", name: "email"}
	})).toBe("Valid message is required");
	expect(Validators.validateInputs({
		message: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "Message", name: "message"},
		name: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "Geoff", name: "name"},
		email: {type: ImportTypes.NON_NUMERIC_TEXT_INPUT, value: "geoff@geoff.com", name: "email"}
	})).toBe(200);

});
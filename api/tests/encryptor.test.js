const Encryptor = require('../utils/encryptor');

const validHash = "$2b$08$qD2AYd5GVaSq0dqHyp7Ju.cKmMF5ngRY1UN/ywBf/66XX8Qqgzo8C";
const validPassword = '123456';

describe("Encryptor Class", () => {

	test("Validate with valid password", async () => {
		expect(await Encryptor.validate(validPassword, validHash)).toBeTruthy();
	});

	test("Validate with invalid password", async () => {
		expect(await Encryptor.validate("123", validHash)).toBeFalsy();
	});

	test("Validate with empty password", async () => {
		expect(await Encryptor.validate("", validHash)).toBeFalsy();
	});

	test("Validate with null password", async () => {
		expect(await Encryptor.validate(null, validHash)).toBeFalsy();
	});

	test("Encrypt Password", async () => {
		expect(await Encryptor.encrypt("fake_password")).not.toBeFalsy();
		expect(await Encryptor.encrypt("fake_password2")).not.toBeFalsy();
		expect(await Encryptor.encrypt("fake_password")).not.toBeNull();
		expect(await Encryptor.encrypt("fake_password2")).not.toBeNull();
	});

	test("Encrypt Null", async () => {
		expect(await Encryptor.encrypt(null)).toBeFalsy();
	});

	test("Encrypt Empty", async () => {
		expect(await Encryptor.encrypt("")).toBeFalsy();
	});

});
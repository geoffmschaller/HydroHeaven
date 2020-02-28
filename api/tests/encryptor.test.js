const Encryptor = require('../utils/encryptor');

it("Encryptor Test", async () => {

	const validHash = "$2b$08$qD2AYd5GVaSq0dqHyp7Ju.cKmMF5ngRY1UN/ywBf/66XX8Qqgzo8C";
	const validPassword = '123456';

	expect(await Encryptor.validate(validPassword, validHash)).toBeTruthy();
	expect(await Encryptor.validate("123", validHash)).toBeFalsy();
	expect(await Encryptor.validate("", validHash)).toBeFalsy();
	expect(await Encryptor.validate(null, validHash)).toBeFalsy();

});
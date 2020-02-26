const bcrypt = require('bcrypt');

class Encryptor {

	static encrypt = async (input) => {
		try {
			return await bcrypt.hashSync(input, 8);
		} catch (e) {
			return false;
		}
	};

	static validate = async (plainText, encryptedText) => {
		try {
			return await bcrypt.compare(plainText, encryptedText);
		} catch (e) {
			return false;
		}
	};

}

module.exports = Encryptor;
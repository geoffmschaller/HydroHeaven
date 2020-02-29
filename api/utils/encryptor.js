const bcrypt = require('bcrypt');

class Encryptor {

	static encrypt = async (password) => {
		try {
			return password === "" ? false : await bcrypt.hashSync(password, 8);
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
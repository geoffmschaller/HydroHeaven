const bcrypt = require('bcrypt');

const hashCompare = async (plainText, hashToCompare) => {
	return await bcrypt.compare(plainText, hashToCompare);
}

module.exports = hashCompare;
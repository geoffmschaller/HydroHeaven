const bcrypt = require('bcrypt');

const hasher = async (itemToHash) => {
	return bcrypt.hash(itemToHash, 10);
}

module.exports = hasher;
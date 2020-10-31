const bcrypt = require('bcrypt');

const hasher = async (itemToHash) => bcrypt.hash(itemToHash, 10);

module.exports = hasher;
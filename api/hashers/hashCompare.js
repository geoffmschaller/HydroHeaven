const bcrypt = require('bcrypt');

const hashCompare = async (plainText, hashToCompare) => bcrypt.compare(plainText, hashToCompare);

module.exports = hashCompare;
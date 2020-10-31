const bcrypt = require('bcrypt');

const hashCompare = async (pt, ht) => await bcrypt.compare(pt, ht);

module.exports = hashCompare;
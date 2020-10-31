const jwt = require('jsonwebtoken');

const decodeToken = async (token) => jwt.verify(token, process.env.JWT_AUTH_TOKEN);

module.exports = decodeToken;
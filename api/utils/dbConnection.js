const path = require('path');
const sqlite = require('sqlite');

class DBConnection {

	static connect = async (name) => {
		const location = `../api/db/${process.env === 'production' ? name : 'development'}.sqlite`.toString();
		return await sqlite.open(path.resolve(location));
	};

	static close = async (connection) => {
		return await connection.close();
	};

}

module.exports = DBConnection;
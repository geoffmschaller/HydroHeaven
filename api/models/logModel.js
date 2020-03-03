const path = require('path');
const sqlite = require('sqlite');
const DBConnection = require('../utils/dbConnection');

class Log {

	static event = async (type, data, email = "") => {
		try {
			const db = await DBConnection.connect('logs');
			const createdLog = await db.run('INSERT INTO logs (date, type, message, user) VALUES (?, ?, ?, ?)', [`${new Date()}`, type, data, email]);
			await DBConnection.close(db);
			if (!createdLog) return false;
			return createdLog;
		} catch (e) {
			return false;
		}
	};

}

module.exports = Log;
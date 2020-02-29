const path = require('path');
const sqlite = require('sqlite');

class Log {

	static event = async (type, data, email = "") => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/logs.db'));
			const createdLog = await db.run('INSERT INTO logs (date, type, data, user) VALUES (?, ?, ?, ?)', [`${new Date()}`, type, data, email]);
			if (!createdLog) return false;
			return createdLog;
		} catch (e) {
			return false;
		}
	};

}

module.exports = Log;
const path = require('path');
const sqlite = require('sqlite');

class User {

	static login = async (email, password) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=? AND password=?', [email, password]);
			await db.close();
			if (!retrievedUser) return false;
			return retrievedUser;
		} catch (e) {
			return false;
		}
	};

	static getField = async (email, field) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get(`SELECT ${field} FROM users WHERE email=?`, [email]);
			await db.close();
			if (!retrievedUser) return false;
			return retrievedUser[field];
		} catch (e) {
			return false;
		}
	};

	static setField = async (email, field, value) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run(`UPDATE users SET ${field}=? WHERE email=?`, [value, email]);
			if (!result) return false;
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	};

}

module.exports = User;
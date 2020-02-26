const path = require('path');
const sqlite = require('sqlite');

class User {

	static login = async (email, password) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=? AND password=?', [email, password]);
			if (!retrievedUser) return 500;
			await db.close();
			return retrievedUser;
		} catch (e) {
			return 500;
		}
	};

	static emailExists = async (email) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=?', [email]);
			if (!retrievedUser) return 500;
			await db.close();
			return retrievedUser;
		} catch (e) {
			return 500;
		}
	};

	static changePassword = async (email, password) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET password=? WHERE email=?', [password, email]);
			if (!result) return 500;
			await db.close();
			return result;
		} catch (e) {
			return 500;
		}
	};

	static setResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET resetToken=? WHERE email=?', [token, email]);
			if (!result) return 500;
			await db.close();
			return result;
		} catch (e) {
			return 500;
		}
	};

	static checkResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.get('SELECT * FROM users WHERE email=? AND resetToken=?', [email, token]);
			if (!result) return 500;
			await db.close();
			return result;
		} catch (e) {
			return 500;
		}
	};

	static invalidateResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET resetToken=? WHERE email=?', [null, email]);
			if (!result) return 500;
			await db.close();
			return result;
		} catch (e) {
			return 500;
		}
	};
}

module.exports = User;
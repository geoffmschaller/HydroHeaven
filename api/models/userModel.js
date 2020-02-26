const path = require('path');
const sqlite = require('sqlite');

class User {

	static login = async (email, password) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=? AND password=?', [email, password]);
			if (!retrievedUser) return false;
			await db.close();
			return retrievedUser;
		} catch (e) {
			return false;
		}
	};

	static emailExists = async (email) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=?', [email]);
			if (!retrievedUser) return false;
			await db.close();
			return retrievedUser;
		} catch (e) {
			return false;
		}
	};

	static getPassword = async (email) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=?', [email]);
			if (!retrievedUser) return false;
			await db.close();
			return retrievedUser.password;
		} catch (e) {
			return false;
		}
	};

	static changePassword = async (email, password) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET password=? WHERE email=?', [password, email]);
			if (!result) return false;
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	};

	static setResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET resetToken=? WHERE email=?', [token, email]);
			if (!result) return false;
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	};

	static checkResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.get('SELECT * FROM users WHERE email=? AND resetToken=?', [email, token]);
			if (!result) return false;
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	};

	static invalidateResetToken = async (email, token) => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/users.db'));
			const result = await db.run('UPDATE users SET resetToken=? WHERE email=?', [null, email]);
			if (!result) return false;
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	};
}

module.exports = User;
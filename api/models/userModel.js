const DBConnection = require('../utils/dbConnection');

class User {

	static create = async (id, email, password, displayName) => {
		try {
			const db = await DBConnection.connect('users');
			const retrievedUser = await db.run('INSERT INTO users(id, email, password, displayName) VALUES(?,?,?,?)', [id, email, password, displayName]);
			await DBConnection.close(db);
			return retrievedUser;
		} catch (e) {
			return false;
		}
	};

	static login = async (email, password) => {
		try {
			const db = await DBConnection.connect('users');
			const retrievedUser = await db.get('SELECT * FROM users WHERE email=? AND password=?', [email, password]);
			await DBConnection.close(db);
			return retrievedUser;
		} catch (e) {
			return false;
		}
	};

	static getField = async (email, field) => {
		try {
			const db = await DBConnection.connect('users');
			const retrievedUser = await db.get(`SELECT ${field} FROM users WHERE email=?`, [email]);
			await DBConnection.close(db);
			if (!retrievedUser) return false;
			return retrievedUser[field];
		} catch (e) {
			return false;
		}
	};

	static setField = async (email, field, value) => {
		try {
			const db = await DBConnection.connect('users');
			const result = await db.run(`UPDATE users SET ${field}=? WHERE email=?`, [value, email]);
			await DBConnection.close(db);
			if (!result) return false;
			return result;
		} catch (e) {
			return false;
		}
	};

	static getWhere = async (field, value) => {
		try {
			const db = await DBConnection.connect('users');
			const result = await db.get(`SELECT * FROM users WHERE ${field}=?`, [value]);
			await DBConnection.close(db);
			return result;
		} catch (e) {
			return false;
		}
	};

}

module.exports = User;
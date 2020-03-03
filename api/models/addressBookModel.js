const path = require('path');
const sqlite = require('sqlite');
const DBConnection = require('../utils/dbConnection');

class AddressBook {

	static all = async () => {
		try {
			const db = await DBConnection.connect('addressBook');
			const retrievedAddresses = await db.all('SELECT * FROM addresses');
			await DBConnection.close(db);
			if (!retrievedAddresses) return false;
			return retrievedAddresses;
		} catch (e) {
			return false;
		}
	};

	static find = async (id) => {
		try {
			const db = await DBConnection.connect('addressBook');
			const retrievedAddresses = await db.get('SELECT * FROM addresses WHERE id=?', [id]);
			await DBConnection.close(db);
			if (!retrievedAddresses) return false;
			return retrievedAddresses;
		} catch (e) {
			return false;
		}
	};

	static add = async (id, fname, lname, email, phone, address) => {
		try {
			const db = await DBConnection.connect('addressBook');
			const savedAddress = await db.run('INSERT INTO addressBook VALUES(?,?,?,?,?,?)', [id, fname, lname, email, phone, address]);
			await DBConnection.close(db);
			return savedAddress;
		} catch (e) {
			return false;
		}
	};

	static update = async (id, fields) => {

		let query = 'UPDATE addresses SET ';
		let keys = Object.keys(fields);
		let vals = [];
		for (let i = 0; i < keys.length; i++) {
			query += `${keys[i]}=? `.toString();
			if (i < keys.length - 1) {
				query += ', ';
			}
			vals.push(fields[keys[i]].toString());
		}
		query += 'WHERE id=?';
		vals.push(id);

		try {
			const db = await DBConnection.connect('addressBook');
			const savedAddress = await db.run(query, vals);
			await DBConnection.close(db);
			return savedAddress;
		} catch (e) {
			return false;
		}
	}

}

module.exports = AddressBook;
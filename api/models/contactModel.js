const DBConnection = require('../utils/dbConnection');

class Contact {

	static save = async (name, email, message) => {
		try {
			const db = await DBConnection.connect('contacts');
			const result = await db.run('INSERT INTO contacts VALUES(?,?,?,?)', [name, email, message, `${new Date()}`]);
			await DBConnection.close(db);
			return result;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
}

module.exports = Contact;
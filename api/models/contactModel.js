const path = require('path');
const sqlite = require('sqlite');

class Contact {

	constructor(name, email, message) {
		this.name = name;
		this.email = email;
		this.message = message;
	}

	save = async () => {
		try {
			const db = await sqlite.open(path.resolve('../api/db/contacts.db'));
			const result = await db.run('INSERT INTO contacts VALUES(?,?,?,?)', [this.name, this.email, this.message, `${new Date()}`]);
			await db.close();
			return result;
		} catch (e) {
			return false;
		}
	}
}

module.exports = Contact;
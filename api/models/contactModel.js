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
			await db.run('INSERT INTO contacts VALUES(?,?,?,?)', [this.name, this.email, this.message, `${new Date()}`]);
			await db.close();
			return 200;
		} catch (e) {
			return 500;
		}
	}
}

module.exports = Contact;
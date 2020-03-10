import DBModel from "./DBModel";

class ContactModel extends DBModel {

	name: string;
	email: string;
	message: string;
	date?: string;
	id?: number;

	constructor(name: string, email: string, message: string, id?: number, date?: string) {
		super();
		this.name = name;
		this.email = email;
		this.message = message;
		this.date = date;
		this.id = id;
	}

}

export default ContactModel;
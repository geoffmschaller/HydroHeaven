class ContactModel {

	name: string;
	email: string;
	message: string;
	date?: string;
	id?: string;
	modified?: string;
	user?: string;

	constructor(name: string, email: string, message: string) {
		this.name = name;
		this.email = email;
		this.message = message;
	}

}

export default ContactModel;
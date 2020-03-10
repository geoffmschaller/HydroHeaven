import DBModel from "./DBModel";

class AddressBookModel extends DBModel {

	firstName: string;
	lastName: string;
	phone: string;
	id?: number;
	email?: string;
	address?: string;
	date?: string;

	constructor(firstName: string, lastName: string, phone: string, id?: number, email?: string, address?: string, date?: string) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.id = id;
		this.email = email;
		this.address = address;
		this.date = date;
	}

}

export default AddressBookModel;
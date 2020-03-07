import DBModel from "./DBModel";

class AddressBookModel extends DBModel {

	firstName: string;
	lastName: string;
	phone: string;
	id?: number;
	email?: string;
	address?: string;
	date?: string;

	public getColumms = () => "firstName, lastName, phone, email, address";
	public getValues = () => [this.firstName, this.lastName, this.phone, this.email, this.address];


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
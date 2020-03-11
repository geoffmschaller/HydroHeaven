import DBModel from "./DBModel";

class UserModel extends DBModel {

	email: string;
	firstName: string;
	lastName: string;
	authToken?: string;
	resetToken?: string;
	id?: number;
	date?: string;

	constructor(email: string, firstName: string, lastName: string, id?: number, authToken?: string, resetToken?: string, date?: string) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.authToken = authToken;
		this.resetToken = resetToken;
		this.id = id;
		this.date = date;
	}

}

export default UserModel;
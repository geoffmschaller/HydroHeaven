import DBAdapter from "./DBAdapter";
import ContactModel from "../models/ContactModel";
import Timer from "../utils/timer";
import DBResponse from "../responses/DBResponse";
import DBMessages from '../utils/constants';

class ContactAdapter extends DBAdapter {

	save = async (contact: ContactModel): Promise<DBResponse> => {
		contact.date = new Timer().dateTime();
		contact.id = "151617";

		try {
			await this.connect();
			if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const saveResult = await this.connection.run("INSERT INTO contacts(id, name, email, message, date) VALUES(?,?,?,?,?)", [contact.id, contact.name, contact.email, contact.message, contact.date]);
			if (!saveResult)
				return new DBResponse(DBMessages.CREATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, {contact: contact});
		} catch (e) {
			return new DBResponse(DBMessages.CREATE_ERROR);
		}

	};

	update = async (contact: ContactModel): Promise<DBResponse> => {
		contact.modified = new Timer().dateTime();
		contact.user = "Geoff Schaller";
		if (!contact.id) return new DBResponse(DBMessages.UPDATE_ERROR);
		try {
			await this.connect();
			if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const updateResult = await this.connection.run("UPDATE contacts SET name=?, email=?, message=?, modified=?, user=? WHERE id=?", [contact.name, contact.email, contact.message, contact.modified, contact.user, contact.id]);
			if (!updateResult || !updateResult['changes'])
				return new DBResponse(DBMessages.UPDATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, {contact: contact});
		} catch (e) {
			return new DBResponse(DBMessages.UPDATE_ERROR);
		}

	}

}

export default ContactAdapter;
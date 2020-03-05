import ContactModel from "../models/ContactModel";
import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/constants';
import sqlite from 'sqlite';
import path from "path";

class ContactAdapter {

	static find = async (id: string): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/davelopment.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const findResult = await connection.run("SELECT * FROM contacts WHERE id=?", [id]);
			console.log(await findResult);
			await connection.close();
			if (!findResult)
				return new DBResponse(DBMessages.CREATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, {contact: findResult});
		} catch (e) {
			return new DBResponse(DBMessages.CREATE_ERROR);
		}
	};

	static save = async (contact: ContactModel): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const saveResult = await connection.run("INSERT INTO contacts(id, name, email, message, date) VALUES(?,?,?,?,?)", [contact.id, contact.name, contact.email, contact.message, contact.date]);
			await connection.close();
			if (!saveResult)
				return new DBResponse(DBMessages.CREATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, {contact: contact});
		} catch (e) {
			return new DBResponse(DBMessages.CREATE_ERROR);
		}

	};

	static update = async (contact: ContactModel): Promise<DBResponse> => {
		if (!contact.id) return new DBResponse(DBMessages.UPDATE_ERROR);
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const updateResult = await connection.run("UPDATE contacts SET name=?, email=?, message=?, modified=?, user=? WHERE id=?", [contact.name, contact.email, contact.message, contact.modified, contact.user, contact.id]);
			await connection.close();
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
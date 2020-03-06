import ContactModel from "../models/ContactModel";
import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import sqlite from 'sqlite';
import path from "path";

class ContactAdapter {

	static find = async (id: number): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const findResult = await connection.get("SELECT * FROM contacts WHERE id=?", [id]);
			await connection.close();
			if (!findResult)
				return new DBResponse(DBMessages.GET_ERROR);
			else {
				const foundContact = new ContactModel(findResult.name, findResult.email, findResult.message, findResult.id, findResult.date);
				return new DBResponse(DBMessages.SUCCESS, foundContact);
			}
		} catch (e) {
			return new DBResponse(DBMessages.CREATE_ERROR);
		}
	};

	static all = async (): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const allResult = await connection.all("SELECT * FROM contacts");
			await connection.close();
			if (!allResult)
				return new DBResponse(DBMessages.GET_ERROR);
			else {
				return new DBResponse(DBMessages.SUCCESS, {contacts: allResult});
			}
		} catch (e) {
			return new DBResponse(DBMessages.GET_ERROR);
		}
	};

	static save = async (contact: ContactModel): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const saveResult = await connection.run("INSERT INTO contacts(name, email, message, date) VALUES(?,?,?,?)", [contact.name, contact.email, contact.message, contact.date]);
			await connection.close();
			if (!saveResult)
				return new DBResponse(DBMessages.CREATE_ERROR);
			else {
				contact.id = saveResult['lastID'];
				return new DBResponse(DBMessages.SUCCESS, contact);
			}

		} catch (e) {
			console.log(e);
			return new DBResponse(DBMessages.CREATE_ERROR);
		}

	};

	static update = async (contact: ContactModel): Promise<DBResponse> => {
		if (!contact.id) return new DBResponse(DBMessages.UPDATE_ERROR);
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const updateResult = await connection.run("UPDATE contacts SET name=?, email=?, message=?  WHERE id=?", [contact.name, contact.email, contact.message, contact.id]);
			await connection.close();
			if (!updateResult || !updateResult['changes'])
				return new DBResponse(DBMessages.UPDATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, contact);
		} catch (e) {
			console.log(e);
			return new DBResponse(DBMessages.UPDATE_ERROR);
		}

	}

}

export default ContactAdapter;
import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import Timer from "../utils/Timer";
import DBAdapter from "./DBAdapter";
import AddressBookModel from "../models/AddressBookModel";
import sqlite from 'sqlite';

require('dotenv').config();

class AddressBookAdapter extends DBAdapter {


	constructor() {
		super();
		this.tableName = "addressBook";
	}

	save = async (model: AddressBookModel): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult: sqlite.Statement;
		try {
			model.date = Timer.dateTime();
			queryResult = await this.connection.run(`INSERT INTO ${this.tableName} (firstName, lastName, phone, email, address) VALUES(?,?,?,?,?)`, [model.firstName, model.lastName, model.phone, model.email, model.address]);
			model.id = await queryResult['lastID'];
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

	update = async (model: AddressBookModel): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult: sqlite.Statement;
		try {
			queryResult = await this.connection.run(`UPDATE ${this.tableName} SET firstName=?, lastName=?, phone=?, email=?, address=? WHERE id=?`, [model.firstName, model.lastName, model.phone, model.email, model.address, model.id]);
			await this.connection.close();
			if (!queryResult['changes']) return new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

}

export default AddressBookAdapter;
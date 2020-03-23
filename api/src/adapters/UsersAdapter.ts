import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import DBAdapter from "./DBAdapter";
import sqlite from 'sqlite';
import UserModel from "../models/UserModel";

const bcrypt = require('bcrypt');

require('dotenv').config();

class UsersAdapter extends DBAdapter {


	constructor() {
		super();
		this.tableName = "users";
	}

	save = async (model: UserModel, password: string): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult: sqlite.Statement;
		try {

			const hash = await bcrypt.hash(password, 10);
			queryResult = await this.connection.run(`INSERT INTO ${this.tableName} (email, firstName, lastName, password, authToken, resetToken) VALUES(?,?,?,?,?,?)`, [model.email, model.firstName, model.lastName, hash, model.authToken, model.resetToken]);
			model.id = await queryResult['lastID'];
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

	update = async (model: UserModel, updatedEmail: string): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		let vals = [model.firstName, model.lastName, model.id];
		let stmt = "";
		if (model.email !== updatedEmail) {
			vals = [updatedEmail, model.firstName, model.lastName, model.id];
			stmt = " email=?, ";
		}

		// RUN QUERY
		let queryResult: sqlite.Statement;
		try {
			queryResult = await this.connection.run(`UPDATE users SET ${stmt} firstName=?, lastName=? WHERE id=?`, vals);
			model.email = updatedEmail;
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

}

export default UsersAdapter;
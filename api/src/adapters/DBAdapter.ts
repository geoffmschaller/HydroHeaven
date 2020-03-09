import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import sqlite from 'sqlite';
import path from "path";
import DBModel from "../models/DBModel";
import Timer from "../utils/Timer";

require('dotenv').config();

class DBAdapter {

	connection?: sqlite.Database;

	private connect = async (): Promise<boolean> => {
		let dbName = "";
		switch (process.env.NODE_ENV) {
			case 'production':
				dbName = 'production';
				break;
			case 'test':
				dbName = 'testing';
				break;
			default:
				dbName = 'development';
		}
		try {
			this.connection = await sqlite.open(path.resolve(`../api/db/${dbName}.sqlite`));
			return true;
		} catch (e) {
			return false;
		}
	};

	private handleError = (error: any): DBResponse => {
		console.log(error);
		if (error['errno'] === 1) return new DBResponse(DBMessages.CONNECTION_FAILURE);
		if (error['errno'] === 19) return new DBResponse(DBMessages.NON_UNIQUE);
		return new DBResponse(DBMessages.SAVE_ERROR);
	};

	find = async (table: string, id: number): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		let queryResult;
		try {
			queryResult = await this.connection.get(`SELECT * FROM ${table} WHERE id=?`, [id]);
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
	};

	all = async (table: string): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult;
		try {
			queryResult = await this.connection.all(`SELECT * FROM ${table}`);
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.GET_ERROR);

	};

	save = async (table: string, model: DBModel): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult;
		let vals: string = "";
		for (let i = 0; i < model.getValues().length; i++) {
			vals += i < model.getValues().length - 1 ? "?," : "?";
		}
		let date = Timer.dateTime();
		try {
			queryResult = await this.connection.run(`INSERT INTO ${table} (${model.getColumms()}, date) VALUES(${vals}, ?)`, [...model.getValues(), date]);
			model.id = await queryResult['lastID'];
			model.date = date;
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

	update = async (table: string, model: DBModel): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult;
		const setStatement: string = model.getColumms().split(", ").join("=?, ") + "=? ";
		try {
			queryResult = await this.connection.run(`UPDATE ${table} SET ${setStatement}  WHERE id=?`, [...model.getValues(), model.id]);
			await this.connection.close();
			if (queryResult['changes'] === 0) return new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

}

export default DBAdapter;
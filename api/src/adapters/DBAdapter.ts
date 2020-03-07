import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import sqlite from 'sqlite';
import path from "path";
import DBModel from "../models/DBModel";
import Timer from "../utils/Timer";

class DBAdapter {

	connection?: sqlite.Database;

	private connect = async (): Promise<boolean> => {
		try {
			this.connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
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
		} catch (e) {
			return this.handleError(e);
		}

		await this.connection.close();
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
		try {
			queryResult = await this.connection.run(`INSERT INTO ${table} (${model.getColumms()}, date) VALUES(${vals}, ?)`, [...model.getValues(), Timer.dateTime()]);
			model.id = await queryResult['lastID'];
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		await this.connection.close();
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
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		await this.connection.close();
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

}

export default DBAdapter;
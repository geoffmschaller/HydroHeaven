import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import sqlite from 'sqlite';
import path from "path";
import DBModel from "../models/DBModel";

require('dotenv').config();

class DBAdapter {

	connection?: sqlite.Database;
	tableName?: string;

	protected connect = async (): Promise<boolean> => {
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

	protected handleError = (error: any): DBResponse => {
		if (error['errno'] === 1) return new DBResponse(DBMessages.CONNECTION_FAILURE);
		if (error['errno'] === 19) return new DBResponse(DBMessages.NON_UNIQUE);
		return new DBResponse(DBMessages.SAVE_ERROR);
	};

	find = async (id: number): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		let queryResult;
		try {
			queryResult = await this.connection.get(`SELECT * FROM ${this.tableName} WHERE id=?`, [id]);
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
	};

	all = async (): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult;
		try {
			queryResult = await this.connection.all(`SELECT * FROM ${this.tableName}`);
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.GET_ERROR);

	};

	where = async (params: object, limit?: number): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// GET KEYS AND VARS
		let keys: string = Object.keys(params).join("=? AND ") + "=? ";
		let values: any[] = Object.values(params);

		// RUN QUERY
		let queryResult;
		try {
			queryResult = await this.connection.all(`SELECT * FROM ${this.tableName} WHERE ${keys}`, values);
			await this.connection.close();
			if (queryResult && queryResult.length === 0) return new DBResponse(DBMessages.NO_RESULTS_FOR_PARAMS);
		} catch (e) {
			return this.handleError(e);
		}

		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.NO_RESULTS_FOR_PARAMS);

	};

}

export default DBAdapter;
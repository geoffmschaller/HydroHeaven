import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import Timer from "../utils/Timer";
import DBAdapter from "./DBAdapter";
import sqlite from 'sqlite';
import PageView from "../models/PageView";

require('dotenv').config();

class PageViewAdapter extends DBAdapter {


	constructor() {
		super();
		this.tableName = "pageViews";
	}

	save = async (model: PageView): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		// RUN QUERY
		let queryResult: sqlite.Statement;
		try {
			model.date = Timer.dateTime();
			queryResult = await this.connection.run(`INSERT INTO ${this.tableName} (page) VALUES(?)`, [model.page]);
			model.id = await queryResult['lastID'];
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, model) : new DBResponse(DBMessages.SAVE_ERROR)

	};

	group = async (start?: number, end?: number): Promise<DBResponse> => {

		// CONNECT
		await this.connect();
		if (!this.connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);

		let statement = "";
		if (start && !end) {
			statement = ` WHERE date >= date('now', '-${start} days')`;
		}

		if (start && end && start > end) {
			statement = ` WHERE date BETWEEN date('now', '-${start} days') AND date('now', '-${end} days')`;
		}

		// RUN QUERY
		let queryResult;
		try {
			queryResult = await this.connection.all(`SELECT page, COUNT(*) AS count FROM ${this.tableName} ${statement} GROUP BY page`);
			await this.connection.close();
		} catch (e) {
			return this.handleError(e);
		}

		// CLOSE AND EVALUATE
		return queryResult ? new DBResponse(DBMessages.SUCCESS, queryResult) : new DBResponse(DBMessages.GET_ERROR)

	};

}

export default PageViewAdapter;
import DBResponse from "../responses/DBResponse";
import {DBMessages} from '../utils/Constants';
import sqlite from 'sqlite';
import path from "path";
import DBModel from "../models/DBModel";
import Timer from "../utils/Timer";

class DBAdapter {

	static find = async (table: string, id: number): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const findResult = await connection.get(`SELECT * FROM ${table} WHERE id=?`, [id]);
			await connection.close();
			if (!findResult)
				return new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
			else {
				return new DBResponse(DBMessages.SUCCESS, findResult);
			}
		} catch (e) {
			return new DBResponse(DBMessages.GET_ERROR);
		}
	};

	static all = async (table: string): Promise<DBResponse> => {
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const allResults = await connection.all(`SELECT * FROM ${table}`);
			await connection.close();
			if (!allResults)
				return new DBResponse(DBMessages.GET_ERROR);
			else {
				return new DBResponse(DBMessages.SUCCESS, allResults);
			}
		} catch (e) {
			return new DBResponse(DBMessages.GET_ERROR);
		}
	};

	static save = async (table: string, model: DBModel): Promise<DBResponse> => {

		let vals: string = "";
		for (let i = 0; i < model.getValues().length; i++) {
			vals += i < model.getValues().length - 1 ? "?," : "?";
		}

		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const saveResult = await connection.run(`INSERT INTO ${table} (${model.getColumms()}, date) VALUES(${vals}, ?)`, [...model.getValues(), Timer.dateTime()]);
			await connection.close();
			if (!saveResult)
				return new DBResponse(DBMessages.CREATE_ERROR);
			else {
				model.id = saveResult['lastID'];
				return new DBResponse(DBMessages.SUCCESS, model);
			}

		} catch (e) {
			console.log(e);
			return new DBResponse(DBMessages.CREATE_ERROR);
		}

	};

	static update = async (table: string, model: DBModel): Promise<DBResponse> => {

		const setStatement: string = model.getColumms().split(", ").join("=?, ") + "=? ";

		if (!model.id) return new DBResponse(DBMessages.NO_RESULTS_FOR_ID);
		try {
			const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!connection) return new DBResponse(DBMessages.CONNECTION_FAILURE);
			const updateResult = await connection.run(`UPDATE ${table} SET ${setStatement}  WHERE id=?`, [...model.getValues(), model.id]);
			await connection.close();
			if (!updateResult || !updateResult['changes'])
				return new DBResponse(DBMessages.UPDATE_ERROR);
			else
				return new DBResponse(DBMessages.SUCCESS, model);
		} catch (e) {
			console.log(e);
			return new DBResponse(DBMessages.UPDATE_ERROR);
		}

	}

}

export default DBAdapter;
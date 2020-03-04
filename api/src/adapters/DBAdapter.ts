import sqlite from 'sqlite';
import path from "path";
import DBResponse from "../responses/DBResponse";
import responses from "../utils/constants";

class DBAdapter {

	connection?: sqlite.Database;

	protected connect = async () => {
		try {
			this.connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
			if (!this.connection) return new DBResponse(responses.CONNECTION_FAILURE);
		} catch (e) {
			return false;
		}
	};

	protected close = async () => {
		try {
			if (this.connection) {
				await this.connection.close();
				this.connection = undefined;
			}
		} catch (e) {
			return false;
		}
	};

}

export default DBAdapter;
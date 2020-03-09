const sqlite = require("sqlite");
const path = require("path");

const migrateDev = async () => {

	try {
		let connection = await sqlite.open(path.resolve(`../api/db/development.sqlite`));
		await connection.migrate({});
		connection = await sqlite.open(path.resolve(`../api/db/testing.sqlite`));
		await connection.migrate({});
	} catch (e) {
		console.log(e);
	}

};

migrateDev();
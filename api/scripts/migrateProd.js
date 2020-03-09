const sqlite = require("sqlite");
const path = require("path");

const migrateProd = async () => {

	try {
		const connection = await sqlite.open(path.resolve(`../api/db/production.sqlite`));
		await connection.migrate({});
	} catch (e) {
		console.log(e);
	}

};

migrateProd();
import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe("User All Suite", () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;

	const entryToAdd = {
		"email": email,
		"firstName": "firstName",
		"lastName": "lastName",
		"password": "1234567890"
	};


	beforeAll(async () => {
		await request.post("/users/new").send(entryToAdd);
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM users WHERE email=?`, [email]);
		await connection.close();
	});

	test('Get All', async (done) => {
		const response = await request.post("/users/all").send();
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.users).toBeDefined();
		expect(parsedResponse.payload.users.length).toBeGreaterThan(0);
		done();
	});

});
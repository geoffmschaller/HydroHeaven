import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe("User View Suite", () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	let generatedId = 0;

	const entryToAdd = {
		"email": email,
		"firstName": "firstName",
		"lastName": "lastName",
		"password": "1234567890"
	};


	beforeAll(async () => {
		const result = await request.post("/users/new").send(entryToAdd);
		generatedId = JSON.parse(result.text).payload.user.id;
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM users WHERE email=?`, [email]);
		await connection.close();
	});

	test('Get Single User', async (done) => {
		const response = await request.post("/users/view").send({"id": generatedId});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.user).toBeDefined();
		expect(parsedResponse.payload.user.firstName).toBe(entryToAdd.firstName);
		expect(parsedResponse.payload.user.lastName).toBe(entryToAdd.lastName);
		expect(parsedResponse.payload.user.email).toBe(entryToAdd.email);
		done();
	});

});
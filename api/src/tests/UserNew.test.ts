import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe("User New Suite", () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;

	const entryToAdd = {
		"email": email,
		"firstName": "firstName",
		"lastName": "lastName",
		"password": "1234567890"
	};

	beforeEach(() => {
		entryToAdd.firstName = "firstName";
		entryToAdd.lastName = "lastName";
		entryToAdd.email = email;
		entryToAdd.password = "1234567890"
	});

	afterEach(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM users WHERE email=?`, [email]);
	});

	test('Successfully Create New User', async (done) => {
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.user.id).not.toBeNull();
		expect(parsedResponse.payload.user.firstName).not.toBeNull();
		expect(parsedResponse.payload.user.firstName).toBe(entryToAdd.firstName);
		expect(parsedResponse.payload.user.lastName).not.toBeNull();
		expect(parsedResponse.payload.user.lastName).toBe(entryToAdd.lastName);
		expect(parsedResponse.payload.user.email).not.toBeNull();
		expect(parsedResponse.payload.user.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.user.password).toBeUndefined();
		expect(parsedResponse.payload.user.authToken).toBeUndefined();
		expect(parsedResponse.payload.user.resetToken).toBeUndefined();

		done();
	});

	test('Missing Email', async (done) => {
		entryToAdd.email = "";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Malformed Email', async (done) => {
		entryToAdd.email = "@.";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing First Name', async (done) => {
		entryToAdd.firstName = "";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Last Name', async (done) => {
		entryToAdd.lastName = "";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Password', async (done) => {
		entryToAdd.password = "";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Short Password', async (done) => {
		entryToAdd.password = "1234";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Long Password', async (done) => {
		entryToAdd.password = "fdsbfjhbshjdfbjhsdbfjhbsdjfbhjsdbfjhsbdfbjsdbfjsdbfbjsdbfjsdbjfhbsjhdfbjhasdbfjhsbajdfbjasdf";
		const response = await request.post("/users/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

});
import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe("User Update Suite", () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	const duplicateEmail = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	const updatedEmail = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	let generatedId: number = 0;

	const entryToAdd = {
		"email": email,
		"firstName": "firstName",
		"lastName": "lastName",
		"password": "1234567890",
		"id": generatedId
	};

	beforeEach(() => {
		entryToAdd.firstName = "firstName";
		entryToAdd.lastName = "lastName";
		entryToAdd.email = email;
		entryToAdd.password = "1234567890";
		entryToAdd.id = generatedId;
	});


	beforeAll(async () => {
		let response = await request.post("/users/new").send(entryToAdd);
		let parsedResponse = JSON.parse(response.text);
		generatedId = parsedResponse.payload.user.id;
		entryToAdd.email = duplicateEmail;
		response = await request.post("/users/new").send(entryToAdd);
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM users WHERE email=?`, [email]);
		await connection.run(`DELETE FROM users WHERE email=?`, [duplicateEmail]);
		await connection.run(`DELETE FROM users WHERE email=?`, [updatedEmail]);
		await connection.close();
	});

	test('Update First Name', async (done) => {
		entryToAdd.firstName = "updatedFirstName";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.user.firstName).toBe(entryToAdd.firstName);
		done();
	});

	test('Missing First Name', async (done) => {
		entryToAdd.firstName = "";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Last Name', async (done) => {
		entryToAdd.lastName = "updatedLastName";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.user.lastName).toBe(entryToAdd.lastName);
		done();
	});

	test('Missing Last Name', async (done) => {
		entryToAdd.lastName = "";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Email', async (done) => {
		entryToAdd.email = updatedEmail;
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.user.email).toBe(entryToAdd.email);
		done();
	});

	test('Missing Email', async (done) => {
		entryToAdd.email = "";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Malformed Email', async (done) => {
		entryToAdd.email = "@.";
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Non Unique Email', async (done) => {
		entryToAdd.email = duplicateEmail;
		const response = await request.post("/users/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

});
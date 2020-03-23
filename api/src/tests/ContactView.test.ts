import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import ContactModel from "../models/ContactModel";
import ContactAdapter from "../adapters/ContactAdapter";

const request = supertest.agent(app);

describe('Contact View Suite', () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	const entryToAdd = new ContactModel("Geoff Schaller", email, "Test message");

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new ContactAdapter().save(entryToAdd);
		generatedID = await result.payload.id;
		done();
	});

	beforeEach((done) => {
		entryToAdd.name = "Geoff Schaller";
		entryToAdd.email = email;
		entryToAdd.message = "Test message";
		entryToAdd.id = generatedID;
		entryToAdd.date = "";
		done();
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM contacts WHERE email=?`, [email]);
	});

	test('Invalid Text ID', async (done) => {
		const response = await request.post("/contact/view").send({id: "hello"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Negative ID', async (done) => {
		const response = await request.post("/contact/view").send({id: "-1"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Non existent ID', async (done) => {
		const response = await request.post("/contact/view").send({id: "123213123123"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('ID as String', async (done) => {
		const response = await request.post("/contact/view").send({id: generatedID.toString()});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.name).toBe(entryToAdd.name);
		expect(parsedResponse.payload.contact.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.contact.message).toBe(entryToAdd.message);
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		done();
	});

	test('ID as number', async (done) => {
		const response = await request.post("/contact/view").send({id: generatedID});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.name).toBe(entryToAdd.name);
		expect(parsedResponse.payload.contact.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.contact.message).toBe(entryToAdd.message);
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		done();
	});

});
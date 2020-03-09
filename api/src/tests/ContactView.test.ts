import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import DBAdapter from "../adapters/DBAdapter";
import ContactModel from "../models/ContactModel";

const request = supertest.agent(app);

describe('Contact View Suite', () => {

	const entryToAdd: ContactModel = new ContactModel(
		"Geoff Schaller",
		"geoff@geoff.com",
		"Test message."
	);

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new DBAdapter().save('contacts', entryToAdd);
		generatedID = await result.payload.id;
		done();
	});

	beforeEach((done) => {
		entryToAdd.name = "Geoff Schaller";
		entryToAdd.email = "geoff@geoff.com";
		entryToAdd.message = "Test message.";
		entryToAdd.id = generatedID;
		entryToAdd.date = "";
		done();
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
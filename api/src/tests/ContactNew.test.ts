import supertest from 'supertest';
import app from "../Main";
import ContactModel from "../models/ContactModel";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe('Contact New Suite', () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	const entryToAdd = new ContactModel("Geoff Schaller", email, "Test Message");

	beforeEach((done) => {
		entryToAdd.name = "Geoff Schaller";
		entryToAdd.email = email;
		entryToAdd.message = "Test Message";
		done();
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM contacts WHERE email=?`, [email]);
	});

	test('Missing Name', async (done) => {
		entryToAdd.name = "";
		const response = await request.post("/contact/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Email', async (done) => {
		entryToAdd.email = "";
		const response = await request.post("/contact/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Malformed Email', async (done) => {
		entryToAdd.email = "@.";
		const response = await request.post("/contact/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Message', async (done) => {
		entryToAdd.email = "";
		const response = await request.post("/contact/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Create new contact', async (done) => {
		const response = await request.post("/contact/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.name).toBe(entryToAdd.name);
		expect(parsedResponse.payload.contact.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.contact.message).toBe(entryToAdd.message);
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		done();
	});

});
import supertest from 'supertest';
import app from "../Main";
import ContactModel from "../models/ContactModel";
import ContactAdapter from "../adapters/ContactAdapter";
import sqlite from "sqlite";
import path from "path";

const request = supertest.agent(app);

describe('Contact All Suite', () => {

	const email = `email@${Math.floor((Math.random() * 1000) + 1)}test.com`;
	const entryToAdd = new ContactModel("Geoff Schaller", email, "Test message");

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new ContactAdapter().save(entryToAdd);
		generatedID = await result.payload.id;
		done();
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve("../api/db/testing.sqlite"));
		await connection.run(`DELETE FROM contacts WHERE email=?`, [email]);
	});

	test('Get All Entries', async (done) => {
		const response = await request.post("/contact/all").send();
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contacts).not.toBeNull();
		expect(parsedResponse.payload.contacts.length).toBeGreaterThan(0);
		done();
	});

});
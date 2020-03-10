import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import DBAdapter from "../adapters/DBAdapter";
import AddressBookModel from "../models/AddressBookModel";
import ContactModel from "../models/ContactModel";
import ContactAdapter from "../adapters/ContactAdapter";

const request = supertest.agent(app);

describe('Address Book Update Suite', () => {

	const entryToAdd: ContactModel = new ContactModel(
		"Geoff Schaller",
		"geoff@geoff.com",
		"Test message"
	);

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new ContactAdapter().save(entryToAdd);
		generatedID = await result.payload.id;
		done();
	});

	beforeEach((done) => {
		entryToAdd.name = "Geoff Schaller";
		entryToAdd.email = "geoff@geoff.com";
		entryToAdd.message = "Test message";
		entryToAdd.id = generatedID;
		entryToAdd.date = "";
		done();
	});

	test('Missing ID', async (done) => {
		entryToAdd.id = undefined;
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Negative ID', async (done) => {
		entryToAdd.id = -1;
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Name', async (done) => {
		entryToAdd.name = "UPDATED";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.name).toBe(entryToAdd.name);
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		done();
	});

	test('Invalid First Name', async (done) => {
		entryToAdd.name = "";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Email', async (done) => {
		entryToAdd.email = "updated@updated.com";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		done();
	});

	test('Missing Email', async (done) => {
		entryToAdd.email = "";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Email', async (done) => {
		entryToAdd.email = "@.";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Message', async (done) => {
		entryToAdd.message = "updated message";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contact.message).toBe(entryToAdd.message);
		expect(parsedResponse.payload.contact.date).not.toBeNull();
		expect(parsedResponse.payload.contact.id).not.toBeNull();
		done();
	});

	test('Invalid Message', async (done) => {
		entryToAdd.message = "";
		const response = await request.post("/contact/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

});
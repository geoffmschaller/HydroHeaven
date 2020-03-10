import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import AddressBookModel from "../models/AddressBookModel";
import ContactModel from "../models/ContactModel";

const request = supertest.agent(app);

describe('Contact New Suite', () => {

	let generatedID: number = 0;

	const entryToAdd = new ContactModel(
		"Geoff Schaller",
		"geoff@geoff.com",
		"Test Message"
	);

	beforeEach((done) => {
		entryToAdd.name = "Geoff Schaller";
		entryToAdd.email = "geoff@geoff.com";
		entryToAdd.message = "Test Message";
		done();
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
		generatedID = parsedResponse.payload.contact.id;
		done();
	});

});
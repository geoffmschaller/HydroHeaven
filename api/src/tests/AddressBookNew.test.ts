import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import AddressBookModel from "../models/AddressModel";

const request = supertest.agent(app);

describe('Address Book New Suite', () => {

	let entryToAdd = new AddressBookModel(
		"Geoff",
		"Schaller",
		"4329843258"
	);

	beforeEach(() => {
		entryToAdd.firstName = "Geoff";
		entryToAdd.lastName = "Schaller";
		entryToAdd.phone = "1681478238";
		entryToAdd.email = "";
		entryToAdd.address = "";
		entryToAdd.id = generatedID;
		entryToAdd.date = "";
	});

	let generatedID: number = 0;

	test('Missing First Name', async (done) => {
		entryToAdd.firstName = "";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Last Name', async (done) => {
		entryToAdd.lastName = "";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Missing Phone Number', async (done) => {
		entryToAdd.phone = "";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Non Numeric Phone Number', async (done) => {
		entryToAdd.phone = "hello";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Bad Email', async (done) => {
		entryToAdd.email = "@@@@....";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Create a new address book entry', async (done) => {
		entryToAdd.email = "geoff@geoff.com";
		entryToAdd.address = "123 Fake Street, Fake Town, Fake State";
		const response = await request.post("/address-book/new").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.addresses.firstName).toStrictEqual(entryToAdd.firstName);
		expect(parsedResponse.payload.addresses.lastName).toStrictEqual(entryToAdd.lastName);
		expect(parsedResponse.payload.addresses.phone).toStrictEqual(entryToAdd.phone);
		expect(parsedResponse.payload.addresses.email).toStrictEqual(entryToAdd.email);
		expect(parsedResponse.payload.addresses.address).toStrictEqual(entryToAdd.address);
		done();
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
		await connection.get(`DELETE FROM addressBook WHERE id=?`, [generatedID]);
	});

});
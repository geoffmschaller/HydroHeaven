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
		expect(parsedResponse.payload.address.firstName).toStrictEqual(entryToAdd.firstName);
		expect(parsedResponse.payload.address.lastName).toStrictEqual(entryToAdd.lastName);
		expect(parsedResponse.payload.address.phone).toStrictEqual(entryToAdd.phone);
		expect(parsedResponse.payload.address.email).toStrictEqual(entryToAdd.email);
		expect(parsedResponse.payload.address.address).toStrictEqual(entryToAdd.address);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		generatedID = parsedResponse.payload.address.id;
		done();
	});

});
import supertest from 'supertest';
import app from "../Main";
import AddressBookModel from "../models/AddressBookModel";

const request = supertest.agent(app);

describe('Address Book New Suite', () => {

	const phone = "4329843258";

	let entryToAdd = new AddressBookModel("Geoff", "Schaller", phone);

	beforeEach(() => {
		entryToAdd.firstName = "Geoff";
		entryToAdd.lastName = "Schaller";
		entryToAdd.phone = phone;
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
import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import DBAdapter from "../adapters/DBAdapter";
import AddressBookModel from "../models/AddressModel";

const request = supertest.agent(app);

describe('Address Book View Suite', () => {

	const entryToAdd: AddressBookModel = new AddressBookModel(
		"Geoff",
		"Schaller",
		"2158734658"
	);

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new DBAdapter().save('addressBook', entryToAdd);
		generatedID = await result.payload.id;
		done();
	});

	beforeEach((done) => {
		entryToAdd.firstName = "Geoff";
		entryToAdd.lastName = "Schaller";
		entryToAdd.phone = "2158734658";
		entryToAdd.email = "";
		entryToAdd.address = "";
		entryToAdd.id = generatedID;
		entryToAdd.date = "";
		done();
	});

	test('Invalid Text ID', async (done) => {
		const response = await request.post("/address-book/view").send({id: "hello"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Negative ID', async (done) => {
		const response = await request.post("/address-book/view").send({id: "-1"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Non existent ID', async (done) => {
		const response = await request.post("/address-book/view").send({id: "123213123123"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('ID as String', async (done) => {
		const response = await request.post("/address-book/view").send({id: generatedID.toString()});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

	test('ID as number', async (done) => {
		const response = await request.post("/address-book/view").send({id: generatedID});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

	afterAll(async () => {
		const connection = await sqlite.open(path.resolve('../api/src/db/development.sqlite'));
		await connection.get(`DELETE FROM addressBook WHERE id=?`, [generatedID]);
	});

});
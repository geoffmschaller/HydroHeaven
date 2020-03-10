import supertest from 'supertest';
import app from "../Main";
import sqlite from "sqlite";
import path from "path";
import DBAdapter from "../adapters/DBAdapter";
import AddressBookModel from "../models/AddressBookModel";
import AddressBookAdapter from "../adapters/AddressBookAdapter";

const request = supertest.agent(app);

describe('Address Book Update Suite', () => {

	const entryToAdd: AddressBookModel = new AddressBookModel(
		"Geoff",
		"Schaller",
		"2158734658"
	);

	let generatedID: number = 0;

	beforeAll(async (done) => {
		const result = await new AddressBookAdapter().save(entryToAdd);
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

	test('Missing ID', async (done) => {
		entryToAdd.id = undefined;
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Negative ID', async (done) => {
		entryToAdd.id = -1;
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update First Name', async (done) => {
		entryToAdd.firstName = "UPDATED";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.address.firstName).toBe(entryToAdd.firstName);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		done();
	});

	test('Invalid First Name', async (done) => {
		entryToAdd.firstName = "";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Last Name', async (done) => {
		entryToAdd.lastName = "UPDATED";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.address.lastName).toBe(entryToAdd.lastName);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		done();
	});

	test('Invalid Last Name', async (done) => {
		entryToAdd.lastName = "";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Phone', async (done) => {
		entryToAdd.phone = "4832159753";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.address.phone).toBe(entryToAdd.phone);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		done();
	});

	test('Invalid Empty Phone', async (done) => {
		entryToAdd.phone = "";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Text Phone', async (done) => {
		entryToAdd.phone = "phone_number";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Invalid Bad Format Phone', async (done) => {
		entryToAdd.phone = "123456789122";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Email', async (done) => {
		entryToAdd.email = "updated@updated.com";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.address.email).toBe(entryToAdd.email);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		done();
	});

	test('Invalid Email', async (done) => {
		entryToAdd.email = "@.";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Update Address', async (done) => {
		entryToAdd.address = "updated address";
		const response = await request.post("/address-book/update").send(entryToAdd);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.address.address).toBe(entryToAdd.address);
		expect(parsedResponse.payload.address.date).not.toBeNull();
		expect(parsedResponse.payload.address.id).not.toBeNull();
		done();
	});

});
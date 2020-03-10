import supertest from 'supertest';
import app from "../Main";

const request = supertest.agent(app);

describe('Analytics Page View New Suite', () => {

	const entryToSend = {
		"page": ""
	};

	beforeEach(() => {
		entryToSend.page = "/testPageNew"
	});

	test('Successfull Log', async (done) => {
		const response = await request.post("/analytics/page-view/new").send(entryToSend);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

	test('Empty Submission', async (done) => {
		entryToSend.page = "";
		const response = await request.post("/analytics/page-view/new").send(entryToSend);
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

});
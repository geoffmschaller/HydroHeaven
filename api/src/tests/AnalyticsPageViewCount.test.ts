import supertest from 'supertest';
import app from "../Main";

const request = supertest.agent(app);

describe('Analytics Page View Count Suite', () => {

	const entryToSend = {
		"page": "/testPageCount"
	};

	beforeAll(async () => {
		await request.post("/analytics/page-view/new").send(entryToSend);
	});

	test('Successfull Log', async (done) => {
		const response = await request.post("/analytics/page-view/count").send();
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		for (let i = 0; i < parsedResponse.payload.length; i++) {
			if (parsedResponse.payload[i].page === entryToSend.page) {
				expect(parsedResponse.payload[i].count).toBeGreaterThan(0);
			}
		}
		done();
	});

	test('Successful Start', async (done) => {
		const response = await request.post("/analytics/page-view/count").send({"start": 20});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

	test('Successful Start & End', async (done) => {
		const response = await request.post("/analytics/page-view/count").send({"start": 20, "end": 5});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

	test('Error Just End', async (done) => {
		const response = await request.post("/analytics/page-view/count").send({"end": 5});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Error String Start and End', async (done) => {
		const response = await request.post("/analytics/page-view/count").send({"start": "start", "end": "end"});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

	test('Error End > Start', async (done) => {
		const response = await request.post("/analytics/page-view/count").send({"start": 20, "end": 25});
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(500);
		done();
	});

});
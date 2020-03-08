import supertest from 'supertest';
import app from "../Main";

const request = supertest.agent(app);

describe('Address Book All Suite', () => {

	test('Get All Entries', async (done) => {
		const response = await request.post("/address-book/all").send();
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		done();
	});

});
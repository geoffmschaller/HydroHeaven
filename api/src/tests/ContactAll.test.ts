import supertest from 'supertest';
import app from "../Main";

const request = supertest.agent(app);

describe('Contact All Suite', () => {

	test('Get All Entries', async (done) => {
		const response = await request.post("/contact/all").send();
		const parsedResponse = JSON.parse(response.text);
		expect(parsedResponse.status).toBe(200);
		expect(parsedResponse.payload.contacts).not.toBeNull();
		done();
	});

});
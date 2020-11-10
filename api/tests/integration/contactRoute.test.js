const express = require("express");
const assignRoutes = require("../../routes");
const request = require("supertest");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fakePostBody = {
	name: 'Fake Name',
	email: 'fake@email.com',
	message: 'This is my fake message'
};

describe('POST /contact/new', () => {

	it('doesn\'t crash', async () => {
		const { body } = await request(app).post('/contact/new').send(fakePostBody);
		expect(body).toEqual({
			status: 200
		});
	});

});
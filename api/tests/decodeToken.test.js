const encodeToken = require('../hashers/encodeToken');
const decodeToken = require('../hashers/decodeToken');

require('dotenv').config();

let fakeEmail;
let token;
let token2;
beforeEach(async () => {
	fakeEmail = 'fakeEmail@email.com';
	token = await encodeToken({ email: fakeEmail });
	token2 = await encodeToken({ email: fakeEmail });
});

describe('Decode Token', () => {
	it('decodes successfully', async () => {
		expect(await decodeToken(token)).toEqual(
			expect.objectContaining({
				email: fakeEmail
			})
		);
		expect(await decodeToken(token2)).toEqual(
			expect.objectContaining({
				email: fakeEmail
			})
		);
	});
});
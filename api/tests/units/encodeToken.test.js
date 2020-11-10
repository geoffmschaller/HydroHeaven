const encodeToken = require('../hashers/encodeToken');

require('dotenv').config();

describe('Encode Token', () => {

	it('encodes correctly', async () => {
		expect(await encodeToken({ email: 'fake_email@email.com' })).not.toBeNull();
		expect(await encodeToken({ email: 'fake_email2@email.com' })).not.toBeNull();
	});

});
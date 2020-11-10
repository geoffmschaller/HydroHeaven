const hasher = require('../hashers/hasher');

describe('Bcrypt Hasher', () => {
	it('encrypts successfully', async () => {
		expect(await hasher('thingToHash')).not.toBeNull();
		expect(await hasher('thingToHash2')).not.toBeNull();
	});
});
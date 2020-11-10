const hasher = require('../hashers/hasher');
const hashCompare = require('../hashers/hashCompare');

let item;
let hash1;
let hash2;
beforeAll(async () => {
	item = '1234';
	hash1 = await hasher(item);
	hash2 = await hasher(item);
});

describe('Hash Compare', () => {
	it('Invalidates an incorrect hash', async () => {
		expect(await hashCompare('4321', hash1)).toBeFalsy();
		expect(await hashCompare('invalid_password', hash2)).toBeFalsy();
	});
	it('Validates a correct hash', async () => {
		expect(await hashCompare(item, hash1)).toBeTruthy();
		expect(await hashCompare(item, hash2)).toBeTruthy();
	});
});
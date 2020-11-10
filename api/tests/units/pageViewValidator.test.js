const PageViewValidator = require('../validators/pageViewValidator');

const fakeData = {
	session: '12345',
	page: '/'
}

describe('Page View Validator', () => {
	it('has an empty string as input', async () => {
		expect(await PageViewValidator("")).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: undefined,
				type: 'typeError'
			})
		)
	});
	it('has a null input', async () => {
		expect(await PageViewValidator(null)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: undefined,
				type: 'typeError'
			})
		)
	});
	// Will throw a 'page' error because it checks in reverse order
	it('has an undefined input', async () => {
		expect(await PageViewValidator(undefined)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'required'
			})
		)
	});
	it('has correct inputs', async () => {
		expect(await PageViewValidator(fakeData)).toBe(200);
		expect(await PageViewValidator({ session: 'fakeSession', page: 'fakePage' })).toBe(200);
	});
});

describe('Page View Validator: Session', () => {
	it('has a null input', async () => {
		expect(await PageViewValidator({ ...fakeData, session: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'session',
				type: 'typeError'
			})
		)
	});
	it('has an undefined input', async () => {
		expect(await PageViewValidator({ ...fakeData, session: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'session',
				type: 'required'
			})
		)
	});
	it('has an empty string as an input', async () => {
		expect(await PageViewValidator({ ...fakeData, session: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'session',
				type: 'required'
			})
		)
	});
	it('has an array as an input', async () => {
		expect(await PageViewValidator({ ...fakeData, session: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'session',
				type: 'typeError'
			})
		)
	});
	it('has an empty object as an input', async () => {
		expect(await PageViewValidator({ ...fakeData, session: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'session',
				type: 'typeError'
			})
		);
	});
});

describe('Page View Validator: Page', () => {
	it('has a null input', async () => {
		expect(await PageViewValidator({ ...fakeData, page: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'typeError'
			})
		)
	});
	it('has an undefined input', async () => {
		expect(await PageViewValidator({ ...fakeData, page: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'required'
			})
		)
	});
	it('has an empty string as input', async () => {
		expect(await PageViewValidator({ ...fakeData, page: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'required'
			})
		)
	});
	it('has an empty array as an input', async () => {
		expect(await PageViewValidator({ ...fakeData, page: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'typeError'
			})
		)
	});
	it('has an empty object as an input', async () => {
		expect(await PageViewValidator({ ...fakeData, page: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'page',
				type: 'typeError'
			})
		);
	})
});
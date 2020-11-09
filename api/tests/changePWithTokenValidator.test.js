const changePWithTValidator = require('../validators/changePWithTValidator');

const testData = {
	email: 'test@email.com',
	newPassword: 'thisIsANewPassword',
	token: 'thisIsTheResetToken'
}

describe('Change Password With Password', () => {
	it('has an input of null', async () => {
		expect(await changePWithTValidator(null)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: undefined,
				type: 'typeError'
			})
		);
	});
	it('has an input of undefined', async () => {
		expect(await changePWithTValidator(undefined)).toEqual(
			// Will throw a 'token' error because it checks in reverse order
			expect.objectContaining({
				name: 'ValidationError',
				path: 'token',
				type: 'required'
			})
		);
	});
	it('has a an array as input', async () => {
		expect(await changePWithTValidator([])).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has an int as an input', async () => {
		expect(await changePWithTValidator(123)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has a string as an input', async () => {
		expect(await changePWithTValidator('123')).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	// Will throw a 'message' error because it checks in reverse order
	it('has an empty object as an input', async () => {
		expect(await changePWithTValidator({})).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'token',
				type: 'required'
			})
		);
	});
	it('has an empty string as an input', async () => {
		expect(await changePWithTValidator("")).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has the correct input', async () => {
		expect(await changePWithTValidator(testData)).toBe(200);
		expect(await changePWithTValidator({ ...testData, email: 'new_email@new_domain.com' })).toBe(200);
		expect(await changePWithTValidator({ ...testData, newPassword: 'newPassword' })).toBe(200);
		expect(await changePWithTValidator({ ...testData, token: 'token' })).toBe(200);
	});
});

describe('Change Password With Password: Email', () => {
	it('has a missing @,., and domain', async () => {
		expect(await changePWithTValidator({ ...testData, email: 'fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing . and domain', async () => {
		expect(await changePWithTValidator({ ...testData, email: 'fake_email@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has double @@s', async () => {
		expect(await changePWithTValidator({ ...testData, email: 'fake_email@@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing @', async () => {
		expect(await changePWithTValidator({ ...testData, email: 'fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, domain and top level', async () => {
		expect(await changePWithTValidator({ ...testData, email: '@.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and domain', async () => {
		expect(await changePWithTValidator({ ...testData, email: '@.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, ., and top level', async () => {
		expect(await changePWithTValidator({ ...testData, email: '@fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and top level', async () => {
		expect(await changePWithTValidator({ ...testData, email: '@fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username', async () => {
		expect(await changePWithTValidator({ ...testData, email: '@fake_email.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has an array for input', async () => {
		expect(await changePWithTValidator({ ...testData, email: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithTValidator({ ...testData, email: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithTValidator({ ...testData, email: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'email'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithTValidator({ ...testData, email: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'email'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithTValidator({ ...testData, email: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'required'
			})
		);
	});
});

describe('Change Password With Password: New Password', () => {
	it('has an array for input', async () => {
		expect(await changePWithTValidator({ ...testData, newPassword: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithTValidator({ ...testData, newPassword: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithTValidator({ ...testData, newPassword: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'newPassword'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithTValidator({ ...testData, newPassword: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'newPassword'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithTValidator({ ...testData, newPassword: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'required'
			})
		);
	});
});

describe('Change Password With Password: Token', () => {
	it('has an array for input', async () => {
		expect(await changePWithTValidator({ ...testData, token: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'token',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithTValidator({ ...testData, token: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'token',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithTValidator({ ...testData, token: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'token'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithTValidator({ ...testData, token: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'token'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithTValidator({ ...testData, token: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'token',
				type: 'required'
			})
		);
	});
});
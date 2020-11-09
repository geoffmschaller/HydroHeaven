const changePWithPValidator = require('../validators/changePWithPValidator');

const testData = {
	email: 'test@email.com',
	newPassword: 'thisIsANewPassword',
	oldPassword: 'thisIsTheOldPassword'
}

describe('Change Password With Password', () => {
	it('has an input of null', async () => {
		expect(await changePWithPValidator(null)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: undefined,
				type: 'typeError'
			})
		);
	});
	it('has an input of undefined', async () => {
		expect(await changePWithPValidator(undefined)).toEqual(
			// Will throw a 'newPassword' error because it checks in reverse order
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'required'
			})
		);
	});
	it('has a an array as input', async () => {
		expect(await changePWithPValidator([])).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has an int as an input', async () => {
		expect(await changePWithPValidator(123)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has a string as an input', async () => {
		expect(await changePWithPValidator('123')).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	// Will throw a 'message' error because it checks in reverse order
	it('has an empty object as an input', async () => {
		expect(await changePWithPValidator({})).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'required'
			})
		);
	});
	it('has an empty string as an input', async () => {
		expect(await changePWithPValidator("")).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has the correct input', async () => {
		expect(await changePWithPValidator(testData)).toBe(200);
		expect(await changePWithPValidator({ ...testData, email: 'new_email@new_domain.com' })).toBe(200);
		expect(await changePWithPValidator({ ...testData, newPassword: 'newPassword' })).toBe(200);
		expect(await changePWithPValidator({ ...testData, oldPassword: 'oldPassword' })).toBe(200);
	});
});

describe('Change Password With Password: Email', () => {
	it('has a missing @,., and domain', async () => {
		expect(await changePWithPValidator({ ...testData, email: 'fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing . and domain', async () => {
		expect(await changePWithPValidator({ ...testData, email: 'fake_email@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has double @@s', async () => {
		expect(await changePWithPValidator({ ...testData, email: 'fake_email@@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing @', async () => {
		expect(await changePWithPValidator({ ...testData, email: 'fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, domain and top level', async () => {
		expect(await changePWithPValidator({ ...testData, email: '@.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and domain', async () => {
		expect(await changePWithPValidator({ ...testData, email: '@.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, ., and top level', async () => {
		expect(await changePWithPValidator({ ...testData, email: '@fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and top level', async () => {
		expect(await changePWithPValidator({ ...testData, email: '@fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username', async () => {
		expect(await changePWithPValidator({ ...testData, email: '@fake_email.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has an array for input', async () => {
		expect(await changePWithPValidator({ ...testData, email: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithPValidator({ ...testData, email: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithPValidator({ ...testData, email: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'email'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithPValidator({ ...testData, email: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'email'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithPValidator({ ...testData, email: "" })).toEqual(
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
		expect(await changePWithPValidator({ ...testData, newPassword: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithPValidator({ ...testData, newPassword: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithPValidator({ ...testData, newPassword: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'newPassword'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithPValidator({ ...testData, newPassword: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'newPassword'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithPValidator({ ...testData, newPassword: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'newPassword',
				type: 'required'
			})
		);
	});
});

describe('Change Password With Password: Old Password', () => {
	it('has an array for input', async () => {
		expect(await changePWithPValidator({ ...testData, oldPassword: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'oldPassword',
				type: 'typeError'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await changePWithPValidator({ ...testData, oldPassword: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'oldPassword',
				type: 'typeError'
			})
		);
	});
	it('has a null input', async () => {
		expect(await changePWithPValidator({ ...testData, oldPassword: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'oldPassword'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await changePWithPValidator({ ...testData, oldPassword: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'oldPassword'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await changePWithPValidator({ ...testData, oldPassword: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'oldPassword',
				type: 'required'
			})
		);
	});
});
const contactValidator = require('../validators/contactValidator');

let test_data = {
	name: "test_name",
	email: "test_email@test_domain.com",
	message: "test message"
};

describe('Contact Validator', () => {
	it('has an input of null', async () => {
		expect(await contactValidator(null)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: undefined,
				type: 'typeError'
			})
		);
	});
	it('has an input of undefined', async () => {
		expect(await contactValidator(undefined)).toEqual(
			// Will throw a 'message' error because it checks in reverse order
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'required'
			})
		);
	});
	it('has a an array as input', async () => {
		expect(await contactValidator([])).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has an int as an input', async () => {
		expect(await contactValidator(123)).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has a string as an input', async () => {
		expect(await contactValidator('123')).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	// Will throw a 'message' error because it checks in reverse order
	it('has an empty object as an input', async () => {
		expect(await contactValidator({})).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'required'
			})
		);
	});
	it('has an empty string as an input', async () => {
		expect(await contactValidator("")).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: undefined
			})
		);
	});
	it('has the correct input', async () => {
		expect(await contactValidator(test_data)).toBe(200);
		expect(await contactValidator({ ...test_data, name: 'new_name' })).toBe(200);
		expect(await contactValidator({ ...test_data, email: 'new_email@new_domain.com' })).toBe(200);
		expect(await contactValidator({ ...test_data, message: 'new_message' })).toBe(200);
	});
});

describe('Contact Validator: Email', () => {
	it('has a missing @,., and domain', async () => {
		expect(await contactValidator({ ...test_data, email: 'fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing . and domain', async () => {
		expect(await contactValidator({ ...test_data, email: 'fake_email@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has double @@s', async () => {
		expect(await contactValidator({ ...test_data, email: 'fake_email@@' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing @', async () => {
		expect(await contactValidator({ ...test_data, email: 'fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, domain and top level', async () => {
		expect(await contactValidator({ ...test_data, email: '@.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and domain', async () => {
		expect(await contactValidator({ ...test_data, email: '@.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username, ., and top level', async () => {
		expect(await contactValidator({ ...test_data, email: '@fake_email' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username and top level', async () => {
		expect(await contactValidator({ ...test_data, email: '@fake_email.' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a missing username', async () => {
		expect(await contactValidator({ ...test_data, email: '@fake_email.com' })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has an array for input', async () => {
		expect(await contactValidator({ ...test_data, email: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'email'
			})
		);
	});
	it('has an empty object as an input', async () => {
		expect(await contactValidator({ ...test_data, email: {} })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'email',
				path: 'email'
			})
		);
	});
	it('has a null input', async () => {
		expect(await contactValidator({ ...test_data, email: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'typeError',
				path: 'email'
			})
		);
	});
	it('has an undefined input', async () => {
		expect(await contactValidator({ ...test_data, email: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				type: 'required',
				path: 'email'
			})
		);
	});
	it('has a blank string as input', async () => {
		expect(await contactValidator({ ...test_data, email: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'email',
				type: 'required'
			})
		);
	});
});

describe('Contact Validator: Name', () => {
	it('has a blank string as input', async () => {
		expect(await contactValidator({ ...test_data, name: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'required'
			})
		);
	});
	it('has an array as input', async () => {
		expect(await contactValidator({ ...test_data, name: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'required'
			})
		);
	});
	// ! Should Throw `REQUIRED` or 'TYPE' Error.
	it('has an object as input', async () => {
		expect(await contactValidator({ ...test_data, name: {} })).toBe(200);
	});
	it('has an undefined input', async () => {
		expect(await contactValidator({ ...test_data, name: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'required'
			})
		);
	});
	it('has a null input', async () => {
		expect(await contactValidator({ ...test_data, name: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'typeError'
			})
		);
	});
	it('has an input that is too short', async () => {
		expect(await contactValidator({ ...test_data, name: "1" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'min'
			})
		);
	});
	it('has an input that is too long', async () => {
		expect(await contactValidator({ ...test_data, name: "ajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvj" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'name',
				type: 'max'
			})
		);
	});
});

describe('Contact Validator: Message', () => {
	it('has an empty string as input', async () => {
		expect(await contactValidator({ ...test_data, message: null })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'typeError'
			})
		);
	});
	it('has an empty string as input', async () => {
		expect(await contactValidator({ ...test_data, message: undefined })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'required'
			})
		);
	});
	it('has an empty string as input', async () => {
		expect(await contactValidator({ ...test_data, message: "" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'required'
			})
		);
	});
	it('has an array as input', async () => {
		expect(await contactValidator({ ...test_data, message: [] })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'required'
			})
		);
	});
	// ! Should Throw `REQUIRED` or `TYPE' Error.
	it('has an empty object as an input', async () => {
		expect(await contactValidator({ ...test_data, message: {} })).toBe(200);
	});
	it('has an input that is too short', async () => {
		expect(await contactValidator({ ...test_data, message: "1" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'min'
			})
		);
	});
	it('has an input that is too long', async () => {
		expect(await contactValidator({ ...test_data, message: "ajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvj" })).toEqual(
			expect.objectContaining({
				name: 'ValidationError',
				path: 'message',
				type: 'max'
			})
		);
	});
});
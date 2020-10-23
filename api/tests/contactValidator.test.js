const contactValidator = require('../validators/contactValidator');

let test_data = {
	name: "test_name",
	email: "test_email@test_domain.com",
	message: "test message"
};

test('Test Sending Invalid Types', async () => {
	expect(await contactValidator(null)).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: undefined,
			type: 'typeError'
		})
	);
	expect(await contactValidator(undefined)).toEqual(
		// Will throw a 'message' error because it checks in reverse order
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'required'
		})
	);
	expect(await contactValidator([])).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'typeError',
			path: undefined
		})
	);
	expect(await contactValidator("")).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'typeError',
			path: undefined
		})
	);
	expect(await contactValidator(123)).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'typeError',
			path: undefined
		})
	);
	expect(await contactValidator({})).toEqual(
		// Will throw a 'message' error because it checks in reverse order
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'required'
		})
	);
});

test('Test Invalid Email', async () => {
	expect(await contactValidator({ ...test_data, email: 'fake_email' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: 'fake_email@' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: 'fake_email@@' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: 'fake_email.' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: '@.' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: '@.com' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: '@fake_email' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: '@fake_email.' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: '@fake_email.com' })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'email',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: [] })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			type: 'required',
			path: 'email'
		})
	);
	expect(await contactValidator({ ...test_data, email: "" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'email',
			type: 'required'
		})
	);
});

test('Test Invalid Name', async () => {
	expect(await contactValidator({ ...test_data, name: "" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'name',
			type: 'required'
		})
	);
	expect(await contactValidator({ ...test_data, name: [] })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'name',
			type: 'required'
		})
	);
	// ! Should Throw `REQUIRED` or 'TYPE' Error.
	expect(await contactValidator({ ...test_data, name: {} })).toBe(200);
	expect(await contactValidator({ ...test_data, name: "1" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'name',
			type: 'min'
		})
	);
	expect(await contactValidator({ ...test_data, name: "ajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvj" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'name',
			type: 'max'
		})
	);
});

test('Test Invalid Message', async () => {
	expect(await contactValidator({ ...test_data, message: "" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'required'
		})
	);
	expect(await contactValidator({ ...test_data, message: [] })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'required'
		})
	);
	// ! Should Throw `REQUIRED` or `TYPE' Error.
	expect(await contactValidator({ ...test_data, message: {} })).toBe(200);
	expect(await contactValidator({ ...test_data, message: "1" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'min'
		})
	);
	expect(await contactValidator({ ...test_data, message: "ajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvjajnsjdfbhjasbdfjbsdajfbjhasbfbsdfsdfabsdfasbdfbasdjfbabsfdbsdfbhdsfbahsdbf scjnnvcbhvbxcvkxbjvbbudsufbsadbfsdabfsadfsadfsdafdfasdfsvxchvhxcvbhjvbjxcbvj" })).toEqual(
		expect.objectContaining({
			name: 'ValidationError',
			path: 'message',
			type: 'max'
		})
	);
});

test('Test Correct Validation', async () => {
	expect(await contactValidator(test_data)).toBe(200);
	expect(await contactValidator({ ...test_data, name: 'new_name' })).toBe(200);
	expect(await contactValidator({ ...test_data, email: 'new_email@new_domain.com' })).toBe(200);
	expect(await contactValidator({...test_data, message: 'new_message'})).toBe(200);
});
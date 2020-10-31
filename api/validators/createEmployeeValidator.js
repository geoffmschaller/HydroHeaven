const yup = require('yup');

const createEmployeeValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		name: yup.string()
			.trim()
			.required()
			.min(2)
			.max(50),
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50),
		password: yup.string()
			.trim()
			.required()
			.min(10)
			.max(100),
		phone: yup.number()
			.required()
			.min(1000000000)
			.max(9999999999),
		role: yup.string()
			.trim()
			.required()
			.min(1)
			.max(50),
		location: yup.string()
			.required()
			.trim()
			.min(2)
			.max(3)
	});
	try {
		await schema.validate(objectToValidate);
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = createEmployeeValidator;
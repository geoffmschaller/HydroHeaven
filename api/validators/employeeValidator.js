const yup = require('yup');

const employeeValidator = async (objectToValidate) => {
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
			.max(100)
	});
	try {
		await schema.validate(objectToValidate);
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = employeeValidator;
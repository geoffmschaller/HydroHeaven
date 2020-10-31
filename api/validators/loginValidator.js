const yup = require('yup');

const loginValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
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

module.exports = loginValidator;
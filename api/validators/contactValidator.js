const yup = require('yup');

const contactValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		name: yup.string()
			.trim()
			.required()
			.min(2)
			.max(50)
			.strict(),
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50)
			.strict(),
		message: yup.string()
			.trim()
			.required()
			.min(2)
			.max(500)
			.strict()
	});
	try {
		await schema.validate(objectToValidate);
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = contactValidator;
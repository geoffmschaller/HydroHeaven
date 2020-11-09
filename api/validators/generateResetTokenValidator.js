const yup = require('yup');

const generateResetTokenValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50)
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

module.exports = generateResetTokenValidator;
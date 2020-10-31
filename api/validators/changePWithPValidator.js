const yup = require('yup');

const changePWithPValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50),
		oldPassword: yup.string()
			.trim()
			.required()
			.min(10)
			.max(100),
		newPassword: yup.string()
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

module.exports = changePWithPValidator;
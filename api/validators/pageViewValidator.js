const yup = require('yup');

const pageViewValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		session: yup.string()
			.trim()
			.required()
			.min(2)
			.max(50),
		page: yup.string()
			.trim()
			.required()
			.max(50)
	});
	try {
		await schema.validate(objectToValidate);
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = pageViewValidator;
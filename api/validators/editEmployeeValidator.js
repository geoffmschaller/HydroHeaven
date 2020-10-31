const yup = require('yup');

const editEmployeeValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50),
		name: yup.string()
			.trim()
			.min(2)
			.max(50),
		phone: yup.number()
			.min(1000000000)
			.max(9999999999),
		role: yup.string()
			.trim()
			.min(1)
			.max(50),
		location: yup.string()
			.trim()
			.min(2)
			.max(3),
		accountActive: yup.bool()
	});
	try {
		await schema.validate(objectToValidate);
		return 200;
	}
	catch (err) {
		return err;
	}
};

module.exports = editEmployeeValidator;
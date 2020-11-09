const yup = require('yup');

const editEmployeeValidator = async (objectToValidate) => {
	const schema = yup.object().shape({
		email: yup.string()
			.trim()
			.required()
			.email()
			.min(5)
			.max(50)
			.strict(),
		name: yup.string()
			.trim()
			.min(2)
			.max(50)
			.strict(),
		phone: yup.number()
			.min(1000000000)
			.max(9999999999)
			.strict(),
		role: yup.string()
			.trim()
			.min(1)
			.max(50)
			.strict(),
		location: yup.string()
			.trim()
			.min(2)
			.max(3)
			.strict(),
		accountActive: yup.bool().strict()
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
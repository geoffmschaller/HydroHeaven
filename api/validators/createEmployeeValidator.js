const yup = require('yup');

const createEmployeeValidator = async (objectToValidate) => {
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
		password: yup.string()
			.trim()
			.required()
			.min(10)
			.max(100)
			.strict(),
		phone: yup.number()
			.required()
			.min(1000000000)
			.max(9999999999)
			.strict(),
		role: yup.string()
			.trim()
			.required()
			.min(1)
			.max(50)
			.strict(),
		location: yup.string()
			.required()
			.trim()
			.when(['AG', 'SLO'], {
				is: true
			})
			.min(2)
			.max(3)
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

module.exports = createEmployeeValidator;
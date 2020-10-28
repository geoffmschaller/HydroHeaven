const yup = require('yup');

const contactValidator = async (object_to_validate) => {

	let schema = yup.object().shape({
		name: yup.string().trim().required().min(2).max(50),
		email: yup.string().trim().required().email().min(5).max(50),
		message: yup.string().trim().required().min(2).max(500),
	});
	try {
		await schema.validate(object_to_validate);
		return 200;
	} catch (err) {
		return err;
	} 

}

module.exports = contactValidator;
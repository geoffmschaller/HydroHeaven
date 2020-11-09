import Axios from "axios";

const SendContactForm = async (name, email, message) => {
	return await Axios.post("https://api.hydroheavenspas.com/contact/new", {
		name: name,
		email: email,
		message: message
	});
};

export default SendContactForm;
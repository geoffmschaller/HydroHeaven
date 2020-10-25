import Axios from "axios";

//https://cors-anywhere.herokuapp.com/

const contactUrl = "https://api.hydroheavenspas.com/contact/new";

const SendContactForm = async (name, email, message) => {
	return await Axios.post(contactUrl, {
		name: name,
		email: email,
		message: message
	});
};

export default SendContactForm;
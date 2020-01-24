import Axios from "axios";

export const SendContactForm = async (name, email, message) => {
	return await Axios.post("https://cors-anywhere.herokuapp.com/https://api.hydroheavenspas.com/contact/send-contact/", {
		name: name,
		email: email,
		message: message
	});
};
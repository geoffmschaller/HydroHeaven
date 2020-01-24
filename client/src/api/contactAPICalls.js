import Axios from "axios";

//https://cors-anywhere.herokuapp.com/

export const SendContactForm = async (name, email, message) => {
	return await Axios.post("https://api.hydroheavenspas.com/contact/send-contact/", {
		name: name,
		email: email,
		message: message
	});
};
import Axios from "axios";

//https://cors-anywhere.herokuapp.com/

const SendContactForm = async (name: string, email: string, message: string) => {
	return await Axios.post("https://api.hydroheavenspas.com/contact/send-contact/", {
		name: name,
		email: email,
		message: message
	});
};

export default SendContactForm;
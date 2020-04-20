import Axios, { AxiosResponse } from "axios";

//https://cors-anywhere.herokuapp.com/

const contactUrl: string = "https://api.hydroheavenspas.com/contact/new";

const SendContactForm = async (name: string, email: string, message: string): Promise<AxiosResponse> => {
	return await Axios.post(contactUrl, {
		name: name,
		email: email,
		message: message
	});
};

export default SendContactForm;
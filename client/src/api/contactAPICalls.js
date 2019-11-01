import Axios from "axios";

export const SendContactForm = async (inputs) => {
	return await Axios.post("/api/contact/send-contact/", {values: inputs});
};
import {LINE_INPUT, MULTI_LINE_INPUT} from "../utils/InputTypes";
import {FORM_READY} from "../utils/FormModes";
import {EMAIL_VALIDATION, TEXT_VALIDATION} from "../utils/ValidationTypes";

export const ServiceContactForm = {
	mode: FORM_READY,
	result: null,
	url: "/api/customer-contact/",
	inputs: [
		{
			name: "Name",
			type: LINE_INPUT,
			required: true,
			value: "",
			validator: TEXT_VALIDATION
		},
		{
			name: "Email",
			type: LINE_INPUT,
			required: true,
			value: "",
			validator: EMAIL_VALIDATION
		},
		{
			name: "Message",
			type: MULTI_LINE_INPUT,
			required: true,
			value: "",
			validator: TEXT_VALIDATION
		}
	]
};
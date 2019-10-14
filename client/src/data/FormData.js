import {LINE_INPUT, MULTI_LINE_INPUT, PASSWORD_INPUT} from "../utils/InputTypes";
import {EMAIL_VALIDATION, TEXT_VALIDATION} from "../utils/ValidationTypes";

export const ServiceContactForm = {
	url: "/api/contact/send-contact/",
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

export const LoginForm = {
	url: "/api/auth/login",
	inputs: [
		{
			name: "Email",
			type: LINE_INPUT,
			required: true,
			value: "",
			validator: EMAIL_VALIDATION
		},
		{
			name: "Password",
			type: PASSWORD_INPUT,
			required: true,
			value: "",
			validator: TEXT_VALIDATION
		}
	]
};
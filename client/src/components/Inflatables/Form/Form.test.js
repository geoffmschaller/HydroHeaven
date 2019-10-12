import React from 'react';
import Form from "./Form";
import {FORM_READY} from "../../../utils/FormModes";
import {LINE_INPUT} from "../../../utils/InputTypes";
import {TEXT_VALIDATION} from "../../../utils/ValidationTypes";

const formData = {
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
		}
	]
};
const wrapper = <Form formData={formData}/>;

it("Form Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
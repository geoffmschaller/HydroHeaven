import React from 'react';
import Services from "./Services";

const wrapper = <Services/>;

describe("Services Inflatable", () => {
	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

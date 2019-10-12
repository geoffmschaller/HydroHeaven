import React from 'react';
import Services from "./Services";

const wrapper = <Services/>;

it("Services", () => {
	expect(wrapper).toMatchSnapshot();
});
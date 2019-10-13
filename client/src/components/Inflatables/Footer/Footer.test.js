import React from 'react';
import Footer from "./Footer";

const wrapper = <Footer/>;

describe('Footer Inflatable', () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});
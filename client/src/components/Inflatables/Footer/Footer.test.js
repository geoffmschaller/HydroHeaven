import React from 'react';
import Footer from "./Footer";

const wrapper = <Footer/>;

it("Footer Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
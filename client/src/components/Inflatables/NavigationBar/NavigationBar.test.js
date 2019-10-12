import React from 'react';
import NavigationBar from "./NavigationBar";

const wrapper = <NavigationBar/>;

it("Navigation Bar Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
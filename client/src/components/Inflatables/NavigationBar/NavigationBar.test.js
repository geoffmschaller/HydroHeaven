import React from 'react';
import NavigationBar from "./NavigationBar";

const wrapper = <NavigationBar/>;

describe("Navigation Bar Inflatable", () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});

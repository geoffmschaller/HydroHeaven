import React from 'react';
import NavigationBar from "./NavigationBar";

const wrapper = <NavigationBar/>;

describe("DashboardNavigation Bar Inflatable", () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});

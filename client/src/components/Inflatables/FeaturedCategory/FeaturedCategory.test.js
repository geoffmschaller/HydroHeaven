import React from 'react';
import FeaturedCategory from "./FeaturedCategory";

const wrapper = <FeaturedCategory/>;

describe("Featured Category Inflatable", () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});

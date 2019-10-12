import React from 'react';
import FeaturedCategory from "./FeaturedCategory";

const wrapper = <FeaturedCategory/>;

it("Featured Category Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
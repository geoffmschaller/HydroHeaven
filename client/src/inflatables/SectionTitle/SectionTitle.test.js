import React from 'react';
import SectionTitle from "./SectionTitle";

const wrapper = <SectionTitle title={"This is the title"}/>;

describe("Section Title Inflatable", () => {
	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

import React from 'react';
import SectionTitle from "./SectionTitle";

const wrapper = <SectionTitle title={"This is the title"}/>;

it("Section Title Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
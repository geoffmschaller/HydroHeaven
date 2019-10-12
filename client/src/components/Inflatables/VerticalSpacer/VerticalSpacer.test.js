import React from 'react';
import VerticalSpacer from "./VerticalSpacer";

const wrapper = <VerticalSpacer height={500}/>;

it("Vertical Spacer Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
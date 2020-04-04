import React from 'react';
import VerticalSpacer from "./VerticalSpacer";

const wrapper = <VerticalSpacer height={500}/>;

describe("Vertical Spacer Inflatable", () => {
	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

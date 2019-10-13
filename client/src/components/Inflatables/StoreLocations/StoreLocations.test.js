import React from 'react';
import StoreLocations from "./StoreLocations";

const wrapper = <StoreLocations/>;

describe("Store Location Inflatable", () => {
	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

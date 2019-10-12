import React from 'react';
import StoreLocations from "./StoreLocations";

const wrapper = <StoreLocations/>;

it("Store Locations Inflatable", () => {
	expect(wrapper).toMatchSnapshot();
});
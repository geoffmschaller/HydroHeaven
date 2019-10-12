import React from 'react';
import App from "./App";

const wrapper = <App/>;

it("App", () => {
	expect(wrapper).toMatchSnapshot();
});
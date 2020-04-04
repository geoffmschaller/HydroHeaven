import React from 'react';
import Block from './Block';
import {FLOAT_LEFT} from "../../utils/FloatTypes";

const wrapper = shallow(
	<Block float={FLOAT_LEFT} width={30}>
		<p>I AM INSIDE OF A BLOCK</p>
	</Block>
);
const instance = wrapper.instance();

describe("DashboardBlock Inflatable", () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("Initial State", () => {
		expect(wrapper.state.windowWidth).toBeGreaterThan(0);
	});

	it("Calculate Width Fired", () => {
		jest.spyOn(instance, 'calculateWidth');
		expect(instance.calculateWidth).toHaveBeenCalled();
	});

});
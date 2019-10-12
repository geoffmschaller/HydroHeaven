import React from 'react';
import Block from './Block';
import {FLOAT_LEFT} from "../../../utils/FloatTypes";

it("Block Component Test", () => {

	const wrapper = shallow(
		<Block float={FLOAT_LEFT} width={30}>
			<p>I AM INSIDE OF A BLOCK</p>
		</Block>
	);
	expect(wrapper).toMatchSnapshot();

});
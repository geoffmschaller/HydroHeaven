import React from 'react';
import ProductGrid from "./ProductGrid";
import SPA_IMAGE from '../../../static/images/spas/250.png';

const product = [
	{
		id: '1234',
		image: SPA_IMAGE
	}
];

const wrapper = <ProductGrid productData={product} link={"/fake-link"} count={4}/>;

describe("Product Grid Inflatable", () => {
	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});
});

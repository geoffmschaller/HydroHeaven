import React from 'react';
import MainHeader from "./MainHeader";
import MAIN_HEADER_TEST_IMAGE from "../../../static/images/headers/swim_spa_display_header.png";
import {VIDEO_FILE} from "../../../utils/MediaTypes";

const wrapper = <MainHeader type={VIDEO_FILE} media={MAIN_HEADER_TEST_IMAGE}/>;


describe("Main Header Inflatable", () => {

	it("Renders Correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

});

import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import BBQ_HEADER_IMAGE from "../../../static/images/headers/bull_bbq_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import {BBQData} from "../../../data/BBQData";
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";

const BBQDisplay = (props) => {

	return (
		<>
			<MainHeader media={BBQ_HEADER_IMAGE} type={IMAGE_FILE}/>
			<div className="widthRestriction">
				<VerticalSpacer height={100}/>
				<SectionTitle title={"Bull BBQs and Islands"}/>
				<ProductGrid productData={BBQData} link={"/bbq-islands/"} count={0}/>
			</div>
			<div className="clear"/>
		</>
	);

};

export default BBQDisplay;
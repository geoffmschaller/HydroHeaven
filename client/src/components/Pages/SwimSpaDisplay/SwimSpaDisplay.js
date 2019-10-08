import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import SWIM_SPA_HEADER_IMAGE from "../../../static/images/headers/swim_spa_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import {SwimSpaData} from "../../../data/SwimSpaData";
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";

const SwimSpaDisplay = (props) => {

	return (
		<>
			<MainHeader media={SWIM_SPA_HEADER_IMAGE} type={IMAGE_FILE}/>
			<div className="widthRestriction">
				<VerticalSpacer height={50}/>
				<SectionTitle title={"Swim Spas"}/>
				<ProductGrid productData={SwimSpaData} link={"/swim-spas/"} count={0}/>
			</div>
			<div className="clear"/>
		</>
	);

};

export default SwimSpaDisplay;
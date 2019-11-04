import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import SPA_HEADER_IMAGE from "../../../static/images/headers/spa_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import {SpaData} from '../../../data/SpaData';
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";
import NavigationBar from "../../Inflatables/NavigationBar/NavigationBar";
import Footer from "../../Inflatables/Footer/Footer";

const SpaDisplay = (props) => {

	return (
		<>
			<NavigationBar/>
			<MainHeader media={SPA_HEADER_IMAGE} type={IMAGE_FILE}/>
			<div className="widthRestriction">
				<VerticalSpacer height={50}/>
				<SectionTitle title={"Spas & Hot Tubs"}/>
				<ProductGrid productData={SpaData} link={"/spas-hot-tubs/"} count={0}/>
			</div>
			<div className="clear"/>
			<VerticalSpacer height={150}/>
			<Footer/>
		</>
	);

};

export default SpaDisplay;
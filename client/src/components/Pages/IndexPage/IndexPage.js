import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import JETS_IMAGE from "../../../static/video/spa_jets.mp4";
import {VIDEO_FILE} from "../../../utils/MediaTypes";
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import FeaturedCategory from "../../Inflatables/FeaturedCategory/FeaturedCategory";
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import StoreLocations from "../../Inflatables/StoreLocations/StoreLocations";
import Services from "../../Inflatables/Services/Services";
import {SpaData} from "../../../data/SpaData";
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";
import NavigationBar from "../../Inflatables/NavigationBar/NavigationBar";
import Footer from "../../Inflatables/Footer/Footer";

export default class IndexPage extends React.Component {

	render() {
		return (
			<>
				<NavigationBar/>
				<MainHeader media={JETS_IMAGE} type={VIDEO_FILE}/>
				<FeaturedCategory/>
				<div className="widthRestriction">
					<VerticalSpacer height={100}/>
					<SectionTitle title={"Featured Spas & Hot Tubs"}/>
					<ProductGrid productData={SpaData} link={"/spas-hot-tubs/"} count={4}/>
					<VerticalSpacer height={100}/>
					<Block float={FLOAT_LEFT} width={40}>
						<SectionTitle title={"Locations"}/>
						<StoreLocations/>
					</Block>
					<Block float={FLOAT_RIGHT} width={60}>
						<SectionTitle title={"Our Services"}/>
						<Services/>
					</Block>
				</div>
				<div className="clear"/>
				<VerticalSpacer height={150}/>
				<Footer/>
			</>
		);
	}

}
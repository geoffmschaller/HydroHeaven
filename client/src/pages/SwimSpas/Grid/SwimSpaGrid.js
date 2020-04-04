import React from 'react';
import VerticalSpacer from "../../../inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {SwimSpaData} from "../../../data/SwimSpaData";
import ProductGrid from "../../../inflatables/ProductGrid/ProductGrid";

class SwimSpaGrid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<>
				<div className="widthRestriction">
					<VerticalSpacer height={50}/>
					<SectionTitle title={"Swim Spas"}/>
					<ProductGrid productData={SwimSpaData} link={"/swim-spas/"} count={0}/>
				</div>
				<div className="clear"/>
			</>
		);
	}
}

export default SwimSpaGrid;
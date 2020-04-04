import React from 'react';
import VerticalSpacer from "../../../inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {BBQData} from "../../../data/BBQData";
import ProductGrid from "../../../inflatables/ProductGrid/ProductGrid";

class BBQGrid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<>
				<div className="widthRestriction">
					<VerticalSpacer height={100}/>
					<SectionTitle title={"Bull BBQs and Islands"}/>
					<ProductGrid productData={BBQData} link={"/bbq-islands/"} count={0}/>
				</div>
				<div className="clear"/>
			</>
		);
	}

}

export default BBQGrid;
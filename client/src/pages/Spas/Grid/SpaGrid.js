import React from 'react';
import VerticalSpacer from "../../../inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {SpaData} from '../../../data/SpaData';
import styles from './SpaGrid.module.sass';
import SpaGridItem from "../../../inflatables/SpaGridItem/SpaGridItem";

class SpaGrid extends React.Component {

	state = {
		mode: "price",
		spaData: SpaData
	};

	componentDidMount() {
		window.scrollTo(0, 0);
		let mode = this.props.match.url.replace("/spas-hot-tubs/grid/", "");
		let data;
		switch (mode) {
			case 'price':
				data = SpaData.sort((a, b) => {
					return a.price > b.price ? 1 : -1
				});
				break;
			case 'seating':
				data = SpaData.sort((a, b) => {
					return a.seats > b.seats ? -1 : 1
				});
				break;
			case 'stocked':
				data = SpaData.filter((spa) => {
					return spa.stocked;
				});
				break;
			case 'size':
				data = SpaData.sort((a, b) => {
					return a.gallons > b.gallons ? -1 : 1
				});
				break;
			default:
				data = SpaData;
		}
		this.setState({spaData: data});
	}

	render() {
		return (
			<>
				<div className="widthRestriction">
					<VerticalSpacer height={50}/>
					<SectionTitle title={"Spas & Hot Tubs"}/>
					<div className={styles.spaGrid}>
						{
							this.state.spaData.map((spa, index) => {
								return <SpaGridItem spa={spa} key={index}/>
							})
						}
					</div>
				</div>
				<div className="clear"/>
			</>
		);
	}

}

export default SpaGrid;
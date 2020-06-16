import React, {createRef} from 'react';
import styles from './SpasHotTubsGrid.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import {RouteComponentProps} from "react-router";
import {SpaData} from '../../../data/SpaData';
import SpaGridItem from "../../../inflatables/SpaGridItem/SpaGridItem";
import SpaDataInterface from "../../../interfaces/SpaDataInterface";

class SpasHotTubsGrid extends React.Component<RouteComponentProps, any> {

	componentDidMount() {
		window.scrollTo(0, this.scrollRef.current!.offsetTop - 50);
	}

	scrollRef = createRef<HTMLDivElement>();

	render() {

		let type = this.props.match.url.replace("/spas-hot-tubs/grid/", "");
		let data: Array<SpaDataInterface> = new Array<SpaDataInterface>();
		switch (type) {
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

		return (
			<div className={styles.spasHotTubsGrid}>
				<div ref={this.scrollRef}/>
				<DarkSlantTitle title={"Our Spas & Hot Tubs"}/>
				<div className={styles.gridHolder}>
					{
						data.map((spa, index) => {
							return <SpaGridItem spa={spa} key={index} click={() => {
							}}/>
						})
					}
				</div>
			</div>
		);
	}

}

export default SpasHotTubsGrid;

import React from 'react';
import styles from './SwimSpasGrid.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import {SwimSpaData} from "../../../data/SwimSpaData";
import SwimSpaGridItem from "../../../inflatables/SpaGridItem/SwimSpaGridItem";

class SwimSpasGrid extends React.Component {

	componentDidMount(){
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div className={styles.swimSpasGrid}>
				<DarkSlantTitle title={"Swim Spas"}/>
				<div className={styles.spasHolder}>
					{
						SwimSpaData.map((spa, index) => {
							return <SwimSpaGridItem spa={spa} key={index}/>
						})
					}
				</div>
			</div>
		);
	}

}

export default SwimSpasGrid;

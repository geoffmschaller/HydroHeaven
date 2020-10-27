import React, {createRef} from 'react';
import styles from './SwimSpasGrid.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import SwimSpaData from "../../../data/SwimSpaData";
import SwimSpaGridItem from "../../../inflatables/SpaGridItem/SwimSpaGridItem";

class SwimSpasGrid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50)
	}

	scrollRef = createRef();

	render() {
		return (
			<div className={styles.swimSpasGrid}>
				<div ref={this.scrollRef}/>
				<DarkSlantTitle title={"Swim Spas"}/>
				<div className={styles.spasHolder}>
					{
						SwimSpaData.map((spa, index) => {
							return <SwimSpaGridItem spa={spa} key={index} click={() => {
							}}/>
						})
					}
				</div>
			</div>
		);
	}

}

export default SwimSpasGrid;

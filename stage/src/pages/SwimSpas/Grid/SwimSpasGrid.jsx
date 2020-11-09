import React, {createRef, useEffect} from 'react';
import styles from './SwimSpasGrid.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import SwimSpaData from "../../../data/SwimSpaData";
import SwimSpaGridItem from "../../../inflatables/SpaGridItem/SwimSpaGridItem";

const SwimSpasGrid = props => {

	useEffect(() => {
		window.scrollTo(0, scrollRef.current.offsetTop - 50);
	});

	const scrollRef = createRef();

	return (
		<div className={styles.swimSpasGrid}>
			<div ref={scrollRef}/>
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

export default SwimSpasGrid;

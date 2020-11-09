import React, {createRef, useEffect} from 'react';
import styles from './SpasHotTubsGrid.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import SpaData from '../../../data/SpaData';
import SpaGridItem from "../../../inflatables/SpaGridItem/SpaGridItem";

const SpasHotTubsGrid = props => {

	useEffect(() => {
		window.scrollTo(0, scrollRef.current.offsetTop - 50);
	});

	const scrollRef = createRef();
	
	let data = SpaData.sort((a, b) => {
				return a.price > b.price ? 1 : -1
			});

	return (
		<div className={styles.spasHotTubsGrid}>
			<div ref={scrollRef}/>
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

export default SpasHotTubsGrid;

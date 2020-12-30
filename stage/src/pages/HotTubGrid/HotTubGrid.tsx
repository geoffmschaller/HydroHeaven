import React, {FunctionComponent} from 'react';
import NavigationBar from '../../components/molecules/NavigationBar/NavigationBar';
import styles from './HotTubGrid.module.sass';
import SpaData from '../../data/HotTubData';
import HotTubGridItem from "../../components/molecules/HotTubGridItem/HotTubGridItem";
import Footer from "../../components/molecules/Footer/Footer";
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";

const HotTubGrid: FunctionComponent = () => {
	return (
		<FadePageTransition>
			<div className={styles.spasGrid}>
				<NavigationBar background="hotTubs"/>
				<FadeAndSlideUp duration={0.3}>
					<div className={styles.grid}>
						{
							SpaData.map((item, index) => <HotTubGridItem hotTub={item} key={index}/>)
						}
					</div>
				</FadeAndSlideUp>
				<Footer isDark={true}/>
			</div>
		</FadePageTransition>
	)
}

export default HotTubGrid;
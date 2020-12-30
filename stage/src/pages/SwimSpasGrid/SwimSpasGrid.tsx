import React, {FunctionComponent} from 'react';
import styles from './SwimSpasGrid.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import SwimSpaData from '../../data/SwimSpaData';
import Footer from "../../components/molecules/Footer/Footer";
import SwimSpaGridItem from "../../components/molecules/SwimSpaGridItem/SwimSpaGridItem";
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";

const SwimSpasGrid: FunctionComponent = () => {
	return (
		<FadePageTransition>
			<div className={styles.swimSpaGrid}>
				<NavigationBar background="swimSpas"/>
				<FadeAndSlideUp duration={0.3}>
					<div className={styles.grid}>
						{
							SwimSpaData.map((item, index) => <SwimSpaGridItem swimSpa={item} key={index}/>)
						}
					</div>
				</FadeAndSlideUp>
				<Footer isDark={true}/>
			</div>
		</FadePageTransition>
	)
}

export default SwimSpasGrid;
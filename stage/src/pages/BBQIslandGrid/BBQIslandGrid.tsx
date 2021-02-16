import React, {FunctionComponent} from 'react';
import styles from './BBQIslandGrid.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import Footer from "../../components/molecules/Footer/Footer";
import BBQData from '../../data/BBQData';
import BBQIslandGridItem from "../../components/molecules/BBQIslandGridItem/BBQIslandGridItem";
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import ScrollToTop from "../../utils/ScrollToTop";

const BBQIslandGrid: FunctionComponent = () => {
	return (
		<FadePageTransition>
			<ScrollToTop/>
			<div className={styles.bbqIslandGrid}>
				<NavigationBar background="bbqs"/>
				<FadeAndSlideUp duration={0.3}>
					<div className={styles.grid}>
						{
							BBQData.map((item, index) => <BBQIslandGridItem bbqIsland={item} key={index}/>)
						}
					</div>
				</FadeAndSlideUp>
				<Footer isDark={true}/>
			</div>
		</FadePageTransition>

	)
}

export default BBQIslandGrid;
import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './BBQIslandDetails.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import Footer from "../../components/molecules/Footer/Footer";
import BBQData from '../../data/BBQData';
import BreadCrumb from "../../components/molecules/BreadCrumbs/BreadCrumbs";
import FadePageTransition from "../../animations/FadePageTransition";
import ScaleUpAndFadeIn from "../../animations/ScaleUpAndFadeIn";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import ScrollToTop from "../../utils/ScrollToTop";

const BBQIslandDetails: FunctionComponent<any> = (props) => {

	const [currentBBQ, setCurrentBBQ] = useState(BBQData[0]);

	useEffect(() => {
		let newSpa = BBQData.filter((item, index) => {
			return item.id === props.match.params.id;
		})[0];
		setCurrentBBQ(newSpa);
	}, [props.match.params.id]);

	return (
		<FadePageTransition>
			<ScrollToTop/>
			<div className={styles.bbqIslandDetails}>
				<NavigationBar background={'spaDetails'}/>
				<BreadCrumb link={'/bbq-islands'} name={'All BBQ Islands'}/>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<ScaleUpAndFadeIn duration={0.3}>
							<img src={currentBBQ.image} alt=""/>
						</ScaleUpAndFadeIn>
					</div>
					<div className={styles.right}>
						<FadeAndSlideUp duration={0.3}>
							<div className={styles.title}>{currentBBQ.name}</div>
							<div className={styles.brand}>By {currentBBQ.brand}</div>
							<div className={styles.description}>{currentBBQ.description}</div>
							<a href={currentBBQ.pdf} target={"_blank"} rel="noreferrer">
								<div className={styles.specSheet}>View Spec Sheet!</div>
							</a>
						</FadeAndSlideUp>
					</div>
				</div>
				<Footer isDark={true}/>
			</div>
		</FadePageTransition>

	)
}

export default BBQIslandDetails;
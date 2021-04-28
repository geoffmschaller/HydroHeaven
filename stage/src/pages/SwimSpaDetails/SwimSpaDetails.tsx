import React, {FunctionComponent, useState, useEffect} from 'react';
import styles from './SwimSpaDetails.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import Footer from "../../components/molecules/Footer/Footer";
import SwimSpaData from '../../data/SwimSpaData';
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import ScaleUpAndFadeIn from "../../animations/ScaleUpAndFadeIn";
import ScrollToTop from "../../utils/ScrollToTop";

const SwimSpaDetails: FunctionComponent<any> = (props) => {

	const [currentSpa, setCurrentSpa] = useState(SwimSpaData[0]);

	useEffect(() => {
		let newSpa = SwimSpaData.filter((item, index) => {
			return item.id === props.match.params.id;
		})[0];
		setCurrentSpa(newSpa);
	}, [props.match.params.id]);

	return (
		<FadePageTransition>
			<ScrollToTop/>
			<div className={styles.swimSpaDetails}>
				<NavigationBar background={'spaDetails'}/>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<ScaleUpAndFadeIn duration={0.3}>
							<img src={currentSpa.image} alt=""/>
						</ScaleUpAndFadeIn>
					</div>
					<div className={styles.right}>
						<FadeAndSlideUp duration={0.3}>
							<div className={styles.title}>{currentSpa.name}</div>
							<div className={styles.brand}>By {currentSpa.brand}</div>
							<div
								className={styles.dimensions}>{`${currentSpa.length}" x ${currentSpa.width}" x ${currentSpa.height}"`}</div>
							<div className={styles.description}>{currentSpa.description}</div>
							<div className={styles.acrylicGrid}>
								{
									currentSpa.acrylic.map((acr, index) => {
										return <div className={styles.acrylic} key={index}>
											<img src={acr.image} alt=""/>
											<div className={styles.title}>{acr.name}</div>
										</div>
									})
								}
							</div>
							<a href={currentSpa.pdf} target={"_blank"} rel="noreferrer">
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

export default SwimSpaDetails;
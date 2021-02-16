import React, {FunctionComponent, useEffect, useState} from 'react';
import styles from './HotTubDetails.module.sass';
import NavigationBar from "../../components/molecules/NavigationBar/NavigationBar";
import Footer from "../../components/molecules/Footer/Footer";
import HotTubData from '../../data/HotTubData';
import BreadCrumb from "../../components/molecules/BreadCrumbs/BreadCrumbs";
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import ScaleUpAndFadeIn from "../../animations/ScaleUpAndFadeIn";
import ScrollToTop from "../../utils/ScrollToTop";

const HotTubDetails: FunctionComponent<any> = (props) => {

	const [currentSpa, setCurrentSpa] = useState(HotTubData[0]);

	useEffect(() => {
		let newSpa = HotTubData.filter((item, index) => {
			return item.id === props.match.params.id;
		})[0];
		setCurrentSpa(newSpa);
	}, [props.match.params.id]);

	return (
		<FadePageTransition>
			<ScrollToTop/>
			<div className={styles.spaDetails}>
				<NavigationBar background={'spaDetails'}/>
				<BreadCrumb link={'/spas-hot-tubs'} name={'All Spas & Hot Tubs'}/>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<ScaleUpAndFadeIn duration={0.3}>
							<img src={currentSpa.image} alt=""/>
						</ScaleUpAndFadeIn>

					</div>
					<div className={styles.right}>
						<FadeAndSlideUp>
							<div className={styles.title}>{currentSpa.name}</div>
							<div className={styles.brand}>By {currentSpa.brand}</div>
							<div className={styles.dimensions}>{`${currentSpa.length}" x ${currentSpa.width}" x ${currentSpa.height}"`}</div>
							<div className={styles.description}>{currentSpa.description}</div>
							<div className={styles.acrylicGrid}>
								{
									currentSpa.acrylic.map((acr, index) => {
										return <FadeAndSlideUp duration={index * 0.07 + 0.5} key={index}>
											<div className={styles.acrylic}>
												<img src={acr.image} alt=""/>
												<div className={styles.title}>{acr.name}</div>
											</div>
										</FadeAndSlideUp>
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

export default HotTubDetails;
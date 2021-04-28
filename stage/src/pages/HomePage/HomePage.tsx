import React, {FunctionComponent} from 'react';
import styles from './HomePage.module.sass';
import NavigationBar from '../../components/molecules/NavigationBar/NavigationBar';
import HOME_PAGE_BACKGROUND from '../../static/images/headers/backyard_night.jpg';
import Footer from '../../components/molecules/Footer/Footer';
import FadePageTransition from "../../animations/FadePageTransition";
import FadeAndSlideUp from "../../animations/FadeAndSlideUp";
import {Link} from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";

const HomePage: FunctionComponent = () => {
	return (
		<FadePageTransition>
			<ScrollToTop/>
			<div className={styles.homePage}>
				<NavigationBar background="home"/>
				<img className={styles.background} src={HOME_PAGE_BACKGROUND}/>
				<div className={styles.overlay}>
					<div className={styles.display}>
						<div className={styles.left}>
							<FadeAndSlideUp>
								<div className={styles.title}>
									Ultimate in <span className={styles.highlight}>Massage</span><br/>and <span
									className={styles.highlight}>Hydro-Therapy!</span>
								</div>
							</FadeAndSlideUp>
							<FadeAndSlideUp duration={0.3}>
								<div className={styles.subtitle}>
									Because you’ve always wanted one...
								</div>
							</FadeAndSlideUp>
							<FadeAndSlideUp duration={0.4}>
								<div className={styles.buttonBar}>
									<Link to={'/spas-hot-tubs/available'}>
										<div className={[styles.available, styles.button].join(" ")}>View Available
											Spas!
										</div>
									</Link>
									<Link to={'/spas-hot-tubs'}>
										<div className={[styles.getStarted, styles.button].join(" ")}>Get Started!</div>
									</Link>

								</div>
							</FadeAndSlideUp>
						</div>
						<div className={styles.right}>
						</div>
					</div>
					<Footer isDark={false}/>
				</div>
			</div>
		</FadePageTransition>
	)
}

export default HomePage;
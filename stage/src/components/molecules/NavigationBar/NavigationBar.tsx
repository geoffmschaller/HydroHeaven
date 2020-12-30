import React, {FunctionComponent, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styles from './NavigationBar.module.sass';
import MAIN_THEME from '../../../themes/Main';
import SlideDown from '../../../animations/SlideDown';
import SlideUp from "../../../animations/SlideUp";

interface Props {
	background: String
}

const NavigationBar: FunctionComponent<Props> = (props) => {

	const [currentWidth, setCurrentWidth] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setCurrentWidth(window.innerWidth)
	}, [])

	const setMenu = (mode: boolean = !isMenuOpen) => {
		setIsMenuOpen(mode);
	}

	let backgroundColor;
	switch (props.background) {
		case "home":
			backgroundColor = 'transparent';
			break;
		default:
			backgroundColor = MAIN_THEME.dark;
	}

	return (
		<div className={styles.navigationBar} style={{backgroundColor: backgroundColor}}>
			<div className={styles.socialBar}>
				<SlideDown>
					<a href={'https://www.facebook.com/pages/category/Health-Spa/Hydro-Heaven-831250550309179/'} target={'_blank'} rel="noreferrer">
						<i className="fab fa-facebook"/>
					</a>
				</SlideDown>
				<SlideDown duration={0.3}>
					<a href={'https://www.yelp.com/biz/hydro-heaven-spas-stoves-and-bbqs-arroyo-grande'} target={'_blank'} rel="noreferrer">
						<i className="fab fa-yelp"/>
					</a>
				</SlideDown>
				<SlideDown duration={0.5}>
					<div className={styles.phone}>(805) 473 - 2205</div>
				</SlideDown>
			</div>
			<div className={styles.menuBar}>
				<div className={styles.logo}>
					<div className={styles.companyName}>Hydro Heaven Spas</div>
				</div>
				<div className={styles.menu}>
					{
						currentWidth <= 900
							? <i className="fas fa-bars" onClick={() => setMenu()}/>
							: <>
								<SlideUp>
									<Link to={'/'}>
										<div className={styles.item}>Home</div>
									</Link>
								</SlideUp>
								<SlideUp duration={0.3}>
									<Link to={'/spas-hot-tubs'}>
										<div className={styles.item}>Hot Tubs</div>
									</Link>
								</SlideUp>
								<SlideUp duration={0.4}>
									<Link to={'/swim-spas'}>
										<div className={styles.item}>Swim Spas</div>
									</Link>
								</SlideUp>
								<SlideUp duration={0.5}>
									<Link to={'/bbq-islands'}>
										<div className={styles.item}>BBQs</div>
									</Link>
								</SlideUp>
								<SlideUp duration={0.6}>
									<Link to={'/service-contact'}>
										<div className={styles.item}>Service/Contact</div>
									</Link>
								</SlideUp>
							</>
					}
				</div>
			</div>
			<div className={[styles.mobileMenu, isMenuOpen ? styles.openMenu : ""].join(" ")}>
				<Link to={'/'}>
					<div className={styles.item}>Home</div>
				</Link>
				<Link to={'/spas-hot-tubs'}>
					<div className={styles.item}>Hot Tubs</div>
				</Link>
				<Link to={'/swim-spas'}>
					<div className={styles.item}>Swim Spas</div>
				</Link>
				<Link to={'/bbq-islands'}>
					<div className={styles.item}>BBQs</div>
				</Link>
				<Link to={'/service-contact'}>
					<div className={styles.item}>Service/Contact</div>
				</Link>
			</div>
		</div>
	)
}

export default NavigationBar;
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavigationBar.module.css';
import MAIN_LOGO from '../../../static/images/main_logo_desktop_no_border.png';

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: false,
		};
		this.setSliderDrawer = (mode) => {
			this.setState({drawerOpen: mode});
			if (!mode) {
				console.log("AUTO");
				document.body.style.overflow = 'auto';
			} else {
				console.log("HIDDEN");
				document.body.style.overflow = 'hidden';
			}
		};
	}


	render() {
		const sliderClasses = this.state.drawerOpen ? styles.slider : [styles.slider, styles.closedSlider].join(' ');

		return (
			<>
				<div className={styles.navigationBar}>
					<div className={styles.desktop}>
						<Link to="/service-contact">
							<div className={styles.menuItem}>
								<i className="fad fa-tools"/>
								SERVICE & CONTACT
							</div>
						</Link>
						<Link to="/bbq-islands">
							<div className={styles.menuItem}>
								<i className="fad fa-fire"/>
								BBQs
							</div>
						</Link>
						<Link to="/swim-spas">
							<div className={styles.menuItem}>
								<i className="fad fa-swimmer"/>
								SWIM SPAS
							</div>
						</Link>
						<Link to="/spas-hot-tubs">
							<div className={styles.menuItem}>
								<i className="fad fa-hot-tub"/>
								HOT TUBS & SPAS
							</div>
						</Link>
						<Link to="/">
							<div className={styles.menuItem}>
								<i className="fad fa-home-alt"/>
								HOME
							</div>
						</Link>
						<div className="clear"/>
					</div>
					<div className={styles.mobile} onClick={() => this.setSliderDrawer(true)}>
						<i className="fad fa-bars"/>
					</div>
					<div className="clear"/>
				</div>

				<div className={sliderClasses}>
					<div className={styles.background} onClick={() => this.setSliderDrawer(false)}/>
					<div className={styles.drawer}>
						<div className={styles.close} onClick={() => this.setSliderDrawer(false)}><i className="fad fa-times"/></div>
						<img src={MAIN_LOGO} alt=""/>
						<div className={styles.menu}>
							<Link to="/" onClick={() => this.setSliderDrawer(false)}>
								<div className={styles.menuItem}>
									<i className="fad fa-home-alt"/>
									HOME
								</div>
							</Link>
							<Link to="/spas-hot-tubs" onClick={() => this.setSliderDrawer(false)}>
								<div className={styles.menuItem}>
									<i className="fad fa-hot-tub"/>
									HOT TUBS & SPAS
								</div>
							</Link>
							<Link to="/swim-spas" onClick={() => this.setSliderDrawer(false)}>
								<div className={styles.menuItem}>
									<i className="fad fa-swimmer"/>
									SWIM SPAS
								</div>
							</Link>
							<Link to="/bbq-islands" onClick={() => this.setSliderDrawer(false)}>
								<div className={styles.menuItem}>
									<i className="fad fa-fire"/>
									BBQs
								</div>
							</Link>
							<Link to="/service-contact" onClick={() => this.setSliderDrawer(false)}>
								<div className={styles.menuItem}>
									<i className="fad fa-tools"/>
									SERVICE & CONTACT
								</div>
							</Link>
						</div>
						<div className={styles.callBlock}>
							<div className={styles.call}>
								<div className={styles.num}>(805) 473 - 2205</div>
								<div className={styles.label}>Call Arroyo Grande</div>
							</div>
							<div className={styles.call}>
								<div className={styles.num}>(805) 544 - 1772</div>
								<div className={styles.label}>Call San Luis Obispo</div>
							</div>
						</div>
					</div>
				</div>
			</>

		);
	}
}

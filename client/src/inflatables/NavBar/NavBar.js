import React from 'react';
import styles from './NavBar.module.sass';
import MAIN_LOGO from '../../static/images/main_logo_desktop_no_border.png';
import {Link} from "react-router-dom";

class NavBar extends React.Component {

	state = {
		mobileOpen: false,
		offset: 0
	};

	links = [
		{
			name: "Home",
			link: "/"
		},
		{
			name: "Spas & Hot Tubs",
			link: "/spas-hot-tubs",
		},
		{
			name: "Swim Spas",
			link: "/swim-spas"
		},
		{
			name: "BBQs & Islands",
			link: "/bbq-islands"
		},
		{
			name: "Service & Contact",
			link: "/service-contact"
		},
		{
			name: "Financing",
			link: "/financing"
		}
	];

	setMobileMenu = async (mode) => {
		await this.setState({mobileOpen: mode, offset: window.scrollY});
		document.body.style.overflow = mode ? 'hidden' : 'auto';
	};

	render() {

		let mobileMenuClasses = this.state.mobileOpen ? [styles.mobileMenuOpen, styles.mobileMenu].join(" ") : styles.mobileMenu;

		return (
			<div id={styles.navBar}>
				<div id={styles.topBar}>
					<img id={styles.mainLogo} src={MAIN_LOGO} alt=""/>
					<div id={styles.phoneBar}>
						<div className={styles.item}>Arroyo Grande: (805) 473 - 2205</div>
						<div className={styles.item}>San Luis Obispo: (805) 544 - 1772</div>
					</div>
				</div>
				<div id={styles.menuBar}>
					<div id={styles.mobileToggle} onClick={() => this.setMobileMenu(true)}><i className="fas fa-bars"/></div>
					<div id={styles.itemHolder}>
						{
							this.links.map((link, index) => {
								return <Link to={link.link} key={index} onClick={() => this.setMobileMenu(false)}>
									<div className={styles.item}>{link.name}</div>
								</Link>
							})
						}
					</div>
				</div>
				<div id={styles.mobileMenu} className={mobileMenuClasses} style={{top: `${this.state.offset}px`}}>
					<div className={styles.close} onClick={() => this.setMobileMenu(false)}><i className="fas fa-times"/></div>
					<div className={styles.itemHolder}>
						{
							this.links.map((link, index) => {
								return <Link to={link.link} key={index} onClick={() => this.setMobileMenu(false)}>
									<div className={styles.item}>{link.name}</div>
								</Link>
							})
						}
					</div>
				</div>
			</div>
		);
	}

}

export default NavBar;
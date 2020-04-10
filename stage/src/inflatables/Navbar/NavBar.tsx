import React from 'react';
import styles from './NavBar.module.sass';
import NavBarLink from "../../interfaces/NavBarLink";
import {Link} from "react-router-dom";

class NavBar extends React.Component<any, any> {

	state = {
		mobileOpen: false,
		offset: 0
	};

	links: Array<NavBarLink> = [
		{
			name: "Home",
			link: "/"
		},
		{
			name: "Spas & Hot Tubs",
			link: "/spas-hot-tubs"
		},
		{
			name: "Swim Spas",
			link: "/swim-spas"
		},
		{
			name: "BBQs & Islands",
			link: "/bbqs-islands"
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

	setMobileMenu = async (mode: boolean) => {
		await this.setState({mobileOpen: mode, offset: window.scrollY});
		document.body.style.overflow = mode ? 'hidden' : 'auto';
	};

	render() {

		let mobileClasses = this.state.mobileOpen ? [styles.mobile, styles.open].join(" ") : styles.mobile;

		return (
			<div className={styles.navBar}>
				<div className={styles.mobileButton} onClick={() => this.setMobileMenu(true)}><i className="fas fa-bars"/> Menu</div>
				<div className={styles.desktop}>
					{
						this.links.map((lin, index) => {
							return <Link to={lin.link} key={index} onClick={() => this.setMobileMenu(false)}>{lin.name}</Link>
						})
					}
				</div>
				<div className={mobileClasses} style={{top: `${this.state.offset}px`}}>
					<div className={styles.close} onClick={() => this.setMobileMenu(false)}><i className="fas fa-times"/></div>
					<div className={styles.itemHolder}>
						{
							this.links.map((lin, index) => {
								return <Link to={lin.link} key={index} onClick={() => this.setMobileMenu(false)}>{lin.name}</Link>
							})
						}
					</div>
				</div>
			</div>
		);
	}

};

export default NavBar;
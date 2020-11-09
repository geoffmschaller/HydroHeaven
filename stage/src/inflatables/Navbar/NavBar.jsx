import React, {useState} from 'react';
import styles from './NavBar.module.sass';
import {Link} from "react-router-dom";

const NavBar = props => {

	const [mobileOpen, setMobileOpen] = useState(false);
	const [screenOffset, setScreenOffset] = useState(0);

	const links = [
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

	const setMobileMenu = async (mode) => {
		setMobileOpen(mode);
		setScreenOffset(window.scrollY);
		document.body.style.overflow = mode ? 'hidden' : 'auto';
	};

	let mobileClasses = mobileOpen ? [styles.mobile, styles.open].join(" ") : styles.mobile;

	return (
		<div className={styles.navBar}>
			<div className={styles.mobileButton} onClick={() => setMobileMenu(true)}><i className="fas fa-bars"/> Menu</div>
			<div className={styles.desktop}>
				{
					links.map((lin, index) => {
						return <Link to={lin.link} key={index} onClick={() => setMobileMenu(false)}>{lin.name}</Link>
					})
				}
			</div>
			<div className={mobileClasses} style={{top: `${screenOffset}px`}}>
				<div className={styles.close} onClick={() => setMobileMenu(false)}><i className="fas fa-times"/></div>
				<div className={styles.itemHolder}>
					{
						links.map((lin, index) => {
							return <Link to={lin.link} key={index} onClick={() => setMobileMenu(false)}>{lin.name}</Link>
						})
					}
				</div>
			</div>
		</div>
	);

};

export default NavBar;
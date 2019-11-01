import React from 'react';
import styles from './Footer.module.css';
import MAIN_LOGO from '../../../static/images/main_logo_desktop_shaddow.png';

const Footer = () => (
	<div className={styles.footer}>
		<img src={MAIN_LOGO} alt=""/>
		<div className={styles.address}>135 Traffic Way - Arroyo Grande - (805) 473 - 2205</div>
		<div className={styles.address}>200 Higuera Street - San Luis Obispo - (805) 544 - 1772</div>
		<div className={styles.copyright}>&copy; {new Date().getFullYear()} Hydro Heaven Spas. All rights reserved.</div>
	</div>
);

export default Footer;

import React from 'react';
import styles from './Footer.module.sass';

import MAIN_LOGO from '../../static/images/main_logo_desktop_shaddow.png';

const Footer = () => {

	return (
		<div className={styles.footer}>
			<img src={MAIN_LOGO} alt=""/>
			<div className={styles.socialBar}>
				<div className={[styles.social, styles.facebook].join(" ")}><i className="fab fa-facebook-f"/></div>
				<div className={[styles.social, styles.instagram].join(" ")}><i className="fab fa-instagram"/></div>
				<div className={[styles.social, styles.yelp].join(" ")}><i className="fab fa-yelp"/></div>
			</div>
			<div className={styles.locations}>
				<div className={styles.location}>135 Traffic Way, Arroyo Grande - (805) 473 - 2205</div>
				<div className={styles.location}>200 Higuera Street, Sand Luis Obispo - (805) 544 - 1772</div>
			</div>
			<div className={styles.copy}>&copy;Kaloosian INC - {new Date().getFullYear()}. All Rights Reserved.</div>
		</div>
	);

};

export default Footer;
import React from 'react';
import styles from './Footer.module.sass';

import MAIN_LOGO from '../../static/images/main_logo_desktop_shaddow.png';

const Footer = () => {

	return (
		<div className={styles.footer}>
			<img src={MAIN_LOGO} alt=""/>
			<div className={styles.socialBar}>
				<a href="https://www.facebook.com/pages/category/Health-Spa/Hydro-Heaven-831250550309179/" target='_blank' rel="noreferrer">
					<div className={[styles.social, styles.facebook].join(" ")}><i className="fab fa-facebook-f"/></div>
				</a>
				<a>
					<div className={[styles.social, styles.instagram].join(" ")}><i className="fab fa-instagram" /></div>
				</a>
				<a href="https://www.yelp.com/biz/hydro-heaven-spas-stoves-and-bbqs-arroyo-grande" target='_blank' rel="noreferrer">
					<div className={[styles.social, styles.yelp].join(" ")}><i className="fab fa-yelp"/></div>
				</a>
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
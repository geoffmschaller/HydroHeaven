import React, {FunctionComponent} from 'react';
import styles from './HeaderBar.module.sass';
import MainLogo from "../../components/MainLogo/MainLogo";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const HeaderBar: FunctionComponent = () => {
	return (
		<div className={styles.headerBar}>
			<div className={styles.top}>
				<MainLogo/>
				<div className={styles.socialBar}>
					<div className={styles.item}>(805) 473 - 2205</div>
					<i className="fab fa-facebook"/>
					<i className="fab fa-yelp"/>
				</div>
			</div>
			<DesktopNavigation/>
			<MobileNavigation/>
		</div>
	)
}

export default HeaderBar;
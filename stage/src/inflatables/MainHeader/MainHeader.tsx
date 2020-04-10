import React from 'react';
import styles from './MainHeader.module.sass';

const MAIN_LOGO = require('../../static/images/main_logo_desktop_no_border.png');

class MainHeader extends React.Component<any, any> {

	render() {
		return (
			<div className={styles.mainHeader}>
				<img src={MAIN_LOGO} alt=""/>
				<div className={styles.stackedLocations}>
					<div className={styles.item}>Arroyo Grande: (805) 473 - 2205</div>
					<div className={styles.item}>San Luis Obispo: (805) 544 - 1772</div>
				</div>
			</div>
		);
	}

}

export default MainHeader;
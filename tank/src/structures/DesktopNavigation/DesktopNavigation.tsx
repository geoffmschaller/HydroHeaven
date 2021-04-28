import React, {FunctionComponent} from 'react';
import styles from './DesktopNavigation.module.sass';

const DesktopNavigation: FunctionComponent = () => {
	return (
		<div className={styles.desktopNavigation}>
			<div className={styles.menu}>
				<div className={styles.item}>Home</div>
				<div className={styles.item}>Spas & Hot Tubs</div>
				<div className={styles.item}>Swim Spas</div>
				<div className={styles.item}>BBQs & Islands</div>
				<div className={styles.item}>Contact</div>
			</div>
		</div>
	)
}

export default DesktopNavigation;
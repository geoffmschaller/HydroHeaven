import React, {FunctionComponent, useState} from 'react';
import styles from './MobileNavigation.module.sass';

const MobileNavigation: FunctionComponent = () => {

	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className={styles.mobileNavigation}>
			<i className="fas fa-bars" onClick={() => setMobileOpen(!mobileOpen)}/>
			<div className={[styles.menu, mobileOpen ? '' : styles.closed].join(" ")}>
				<div className={styles.item}>Home</div>
				<div className={styles.item}>Spas & Hot Tubs</div>
				<div className={styles.item}>Swim Spas</div>
				<div className={styles.item}>BBQs & Islands</div>
				<div className={styles.item}>Contact</div>
			</div>
		</div>
	)
}

export default MobileNavigation;
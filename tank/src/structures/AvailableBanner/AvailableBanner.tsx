import React, {FunctionComponent} from 'react';
import styles from './AvailableBanner.module.sass';

const AvailableBanner: FunctionComponent = () => {
	return (
		<div className={styles.availableBanner}>
			<div className={styles.left}>
				<div className={styles.title}><span className={styles.highlight}>We have inventory!</span></div>
				<div className={styles.subtitle}>Don't want to wait until christmas for a new hot tub? View available
					inventory here and have the hot tub of your choice in your backyard in as little as 2 weeks!
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.viewAvailable}>View Available Spas!</div>
			</div>
		</div>
	)
}

export default AvailableBanner;
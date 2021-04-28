import React, {FunctionComponent} from 'react';
import styles from './MainLogo.module.sass';

const MainLogo: FunctionComponent = () => {
	return (
		<div className={styles.mainLogo}>
			<div className={styles.bold}>Hydro Heaven</div>
			<div className={styles.thin}>Spas & Hot Tubs</div>
		</div>
	)
}

export default MainLogo;
import React, {FunctionComponent} from 'react';
import styles from './ImageDisplay.module.sass';

const ImageDisplay: FunctionComponent = () => {
	return (
		<div className={styles.imageDisplay}>
			<img src="https://americanwhirlpool.com/wp-content/uploads/2020/12/Northcot_2_small.jpg" alt=""/>
			<div className={styles.overlay}>
				<div className={styles.title}>Hot Tubs <span className={styles.highlight}>available Now!</span></div>
				<div className={styles.subtitle}>Hydro Heaven would like to welcome <span className={styles.highlight}>Viking Spas</span> to
					California. These Michigan born hot tubs strive to provide the highest quality spas at the most
					affordable price.
				</div>
				<div className={styles.viewViking}>View Viking Spas!</div>
			</div>
		</div>
	)
}

export default ImageDisplay;
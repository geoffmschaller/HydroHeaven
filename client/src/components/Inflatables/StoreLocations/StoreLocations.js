import React from 'react';
import styles from './StoreLocations.module.css';
import AG_LOCATION_IMAGE from '../../../static/images/locations/arroyo_grande.jpg';
import SLO_LOCATION_IMAGE from '../../../static/images/locations/san_luis_obispo.jpg';

const StoreLocations = (props) => {

	return (
		<div className={styles.storeLocations}>

			<div className={styles.location}>
				<img src={AG_LOCATION_IMAGE} alt=""/>
				<div className={styles.address}>135 Traffic Way - Arroyo Grande, CA</div>
				<div className={styles.phone}>(805) 473 - 2205</div>
			</div>
			<div className={styles.location}>
				<img src={SLO_LOCATION_IMAGE} alt=""/>
				<div className={styles.address}>200 Higuera Street - San Luis Obispo, CA</div>
				<div className={styles.phone}>(805) 544 - 1772</div>
			</div>

		</div>
	);

};

export default StoreLocations;
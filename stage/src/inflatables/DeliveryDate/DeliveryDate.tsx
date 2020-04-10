import React from 'react';
import styles from './DeliveryDate.module.sass';
import Timer from "../../utils/Timer";

interface DeliveryDateProps {
	stocked: boolean
}

const DeliveryDate = (props: DeliveryDateProps) => {

	return (
		<div className={styles.availability}>
			{
				props.stocked ? <div>Delivery Available: {new Timer().getDeliveryDate()}</div> : null
			}
		</div>
	);

};

export default DeliveryDate;
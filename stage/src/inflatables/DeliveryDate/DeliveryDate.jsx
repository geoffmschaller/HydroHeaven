import React from 'react';
import styles from './DeliveryDate.module.sass';

class DeliveryDate extends React.Component {

	render() {

		let result = <div/>;
		switch (this.props.stocked) {
			case "SLO":
				result = <div>View in SLO Location!</div>
				break;
			case "AG":
				result = <div>View in AG Location!</div>
				break;
			default:
				result = "";
				break;
		}

		return (
			//props.stocked ? <div>Delivery Available: {new Timer().getDeliveryDate()}</div> : null
			<div className={styles.availability}>
				{result}
			</div>
		);
	}

}

export default DeliveryDate;

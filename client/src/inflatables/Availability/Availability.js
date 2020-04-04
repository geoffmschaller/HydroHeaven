import React from 'react';
import styles from './Availability.module.sass';
import PropTypes from 'prop-types';

const moment = require('moment');

class Availability extends React.Component {

	render() {

		let d = moment().add(moment().day() === 4 ? 4 : 3, 'd')._d;
		let dateString = moment(d).format("dddd, MMMM Do");

		return (
			<div>
				{
					this.props.stocked
						? <div className={styles.stocked}>
							Available for delivery {dateString}
						</div>
						: <div className={styles.notStocked}/>
				}
			</div>

		);
	}

};

Availability.propTypes = {
	stocked: PropTypes.bool.isRequired
};

export default Availability;
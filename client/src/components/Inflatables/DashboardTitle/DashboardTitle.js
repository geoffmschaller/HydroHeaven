import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './DashboardTitle.module.css';

const DashboardTitle = (props) => (
	<div className={styles.sectionTitle}>
		<div className={styles.title}>
			{props.title}
			{props.children}
		</div>
		<div className="breaker" />
		<div className={styles.welcome}>
			Welcome,
			{props.user.email}
		</div>
	</div>
);

DashboardTitle.propTypes = {
	title: PropTypes.string.isRequired,
	user: PropTypes.shape({
		email: PropTypes.string.isRequired,
	}).isRequired,
};

const mapStateToProps = (state) => ({
	user: state.auth,
});

export default connect(mapStateToProps)(DashboardTitle);

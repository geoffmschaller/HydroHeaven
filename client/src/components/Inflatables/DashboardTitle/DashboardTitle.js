import React from 'react';
import styles from './DashboardTitle.module.css';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const DashboardTitle = (props) => {
	return (
		<div className={styles.sectionTitle}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.border}/>
			<div className={styles.welcome}>Welcome, {props.user.email}</div>
		</div>
	);
};

DashboardTitle.propTypes = {
	title: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	return {
		user: state.auth
	}
};

export default connect(mapStateToProps)(DashboardTitle);
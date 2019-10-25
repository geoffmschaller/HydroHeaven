import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardNavigation.module.css';

const DashboardNavigation = () => (
	<div className={styles.navigation}>
		<Link to="/dashboard">
			<div className={styles.item}>
				<i className="fad fa-home" />
				<div className={styles.label}>Home</div>
			</div>
		</Link>
		<Link to="/dashboard/clients">
			<div className={styles.item}>
				<i className="fad fa-users-class" />
				<div className={styles.label}>Clients</div>
			</div>
		</Link>
	</div>
);

export default DashboardNavigation;

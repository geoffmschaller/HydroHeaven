import React from 'react';
import styles from './DashboardNavigation.module.css';
import {Link} from "react-router-dom";

const DashboardNavigation = (props) => {

	return (
		<div className={styles.navigation}>
			<Link to={"/dashboard"}>
				<div className={styles.item}>
					<i className="fad fa-home"/>
					<div className={styles.label}>Home</div>
				</div>
			</Link>
			<Link to={"/dashboard/clients"}>
				<div className={styles.item}>
					<i className="fad fa-users-class"/>
					<div className={styles.label}>Clients</div>
				</div>
			</Link>
			<Link to={"/dashboard/analytics"}>
				<div className={styles.item}>
					<i className="fad fa-analytics"/>
					<div className={styles.label}>Analytics</div>
				</div>
			</Link>
			<Link to={"/dashboard/orders"}>
				<div className={styles.item}>
					<i className="fad fa-box-open"/>
					<div className={styles.label}>Orders</div>
				</div>
			</Link>
			<Link to={"/dashboard/service-calls"}>
				<div className={styles.item}>
					<i className="fad fa-tools"/>
					<div className={styles.label}>Service Calls</div>
				</div>
			</Link>
			<Link to={"/dashboard/cleaning-list"}>
				<div className={styles.item}>
					<i className="fad fa-atom"/>
					<div className={styles.label}>Cleaning List</div>
				</div>
			</Link>
			<Link to={"/dashboard/users"}>
				<div className={styles.item}>
					<i className="fad fa-users"/>
					<div className={styles.label}>Users</div>
				</div>
			</Link>
			<Link to={"/dashboard/settings"}>
				<div className={styles.item}>
					<i className="fad fa-cogs"/>
					<div className={styles.label}>Settings</div>
				</div>
			</Link>
		</div>
	);

};

export default DashboardNavigation;
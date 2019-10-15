import React from 'react';
import styles from './Navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = (props) => {

	return (
		<div className={styles.navigation}>
			<Link to={"/dashboard"}>
				<div className={styles.item}>
					<i className="fad fa-home"/>
					<div className={styles.label}>Home</div>
				</div>
			</Link>
			<Link to={"/dashboard/users"}>
				<div className={styles.item}>
					<i className="fad fa-users"/>
					<div className={styles.label}>Users</div>
				</div>
			</Link>
			<Link to={"/dashboard/analytics"}>
				<div className={styles.item}>
					<i className="fad fa-analytics"/>
					<div className={styles.label}>Analytics</div>
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

export default Navigation;
import React from 'react';
import styles from './ProfileBar.module.css';

const ProfileBar = () => (
	<div className={styles.profileBar}>
		<img src="https://www.fillmurray.com/300/400" alt="" />
		<div className={styles.name}>Geoff Schaller</div>
		<div className={styles.job}>SLO Manager</div>
		<div className={styles.sectionTitle}>Bio</div>
		<div className={styles.item}>
			<div className={styles.icon}><i className="fad fa-map-marker-alt" /></div>
			<div className={styles.label}>San Luis Obispo</div>
			<div className="clear" />
		</div>
		<div className={styles.item}>
			<div className={styles.icon}><i className="fad fa-envelope" /></div>
			<div className={styles.label}>geoff@</div>
			<div className="clear" />
		</div>
		<div className={styles.item}>
			<div className={styles.icon}><i className="fad fa-mobile-alt" /></div>
			<div className={styles.label}>(805) 835 - 7817</div>
			<div className="clear" />
		</div>
		<div className={styles.item}>
			<div className={styles.icon}><i className="fad fa-user-clock" /></div>
			<div className={styles.label}>June 1st 2016</div>
			<div className="clear" />
		</div>
		<div className={styles.sectionTitle}>Stats</div>
		<div className={styles.stat}>
			<div className={styles.num}>15</div>
			<div className={styles.label}>Invoices</div>
			<div className="clear" />
		</div>
		<div className={styles.stat}>
			<div className={styles.num}>2</div>
			<div className={styles.label}>Open Orders</div>
			<div className="clear" />
		</div>
		<div className={styles.stat}>
			<div className={styles.num}>23</div>
			<div className={styles.label}>Tasks</div>
			<div className="clear" />
		</div>
		<div className="clear" />
		<div className={styles.sectionTitle}>Co-Workers</div>
		<div className={styles.coworkers}>
			<div className={styles.coworker}>
				<img src="https://www.fillmurray.com/200/200" alt="" />
				<div className={styles.name}>Raffi Kaloosian</div>
			</div>
			<div className={styles.coworker}>
				<img src="https://www.fillmurray.com/200/200" alt="" />
				<div className={styles.name}>Nathan Something</div>
			</div>
			<div className={styles.coworker}>
				<img src="https://www.fillmurray.com/200/200" alt="" />
				<div className={styles.name}>Harold Something</div>
			</div>
		</div>
		<div className="clear" />
	</div>
);

export default ProfileBar;

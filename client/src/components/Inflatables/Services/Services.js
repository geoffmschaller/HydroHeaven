import React from 'react';
import styles from './Services.module.css';
import {Link} from "react-router-dom";

const Services = (props) => {

	return (
		<div className={styles.services}>

			<div className={styles.service}>
				<div className={styles.title}>Central Coast Experts.</div>
				<div className={styles.holder}>
					<div className={styles.description}>We are excited to continue and serve the central coast a high quality product and service we stand
						behind.
					</div>
				</div>
				<div className="clear"/>
			</div>
			<div className={styles.service}>
				<div className={styles.title}>Your Chemical Resource</div>
				<div className={styles.holder}>
					<div className={styles.description}>From Chlorine to Test Strips: we stock everything you need to maintain your spa and keep it up and
						running!
					</div>
				</div>
				<div className="clear"/>
			</div>
			<div className={styles.service}>
				<div className={styles.title}>In House Technician</div>
				<div className={styles.holder}>
					<div className={styles.description}>Our full time technician handles the complete range of warranty, maintenance, and repair work. No third
						party hassle!
					</div>
					<Link to={"/service-contact"}>
						<button>Schedule a Service</button>
					</Link>
				</div>
				<div className="clear"/>
			</div>

		</div>
	);

};

export default Services;
import React, {createRef, useEffect} from 'react';
import styles from './Financing.module.sass';
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import FinancingBar from "../../inflatables/FinancingBar/FinancingBar";

const GREEN_SKY_LOGO = require('../../static/images/greensky.svg');

const Financing = props => {

	useEffect(() => {
		window.scrollTo(0, scrollRef.current.offsetTop - 50);
	});

	const scrollRef = createRef();

	return (
		<div className={styles.financing}>
			<div ref={scrollRef}/>
			<DarkSlantTitle title={"Financing"}/>
			<div className={styles.companyOptions}>
				<div className={styles.company}>
					<img src={GREEN_SKY_LOGO} alt=""/>
					<div className={styles.description}>
						Patient Solutions ® are loan program names for certain consumer credit plans extended by
						participating lenders to borrowers for the
						purchase of goods and/or services from participating merchants/providers.
					</div>
				</div>
				<div className={styles.options}>
					<FinancingBar/>
				</div>
			</div>

		</div>
	);

}

export default Financing;
import React from 'react';
import styles from './FinancingBar.module.sass';
import HOT_TUB_IMAGE from '../../static/images/categories/swim_spas.jpg';

const FinancingBar = () => {
	return (
		<div className={styles.financingModule}>
			<div className={styles.header}>
				<img
					src="https://www.greensky.com/merchantkit/images/finance_buttons/headers/header_320.jpg?v=3.0.311"
					alt="Financing Options from GreenSky"/>
			</div>
			<div className={styles.hottub}>
				<img
					src={HOT_TUB_IMAGE}
					alt="Finance Your Spa Project"/>
			</div>
			<div className={styles.option}>
				<a
					href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81069356&dealerplan=9999&channel=External-Button-03"
					target="_blank" rel="noopener noreferrer">
					<img
						src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/9999_320x100.jpg?v=3.0.311" alt="Reduced Rate for 84 Months"/>
				</a>
			</div>
			<div className={styles.option}>
				<a
					href="https://portal.greenskycredit.com/MerchantLoanApplication?apptype=short&merchant=81069356&dealerplan=1969&channel=External-Button-03"
					target="_blank" rel="noopener noreferrer">
					<img
						src="https://www.greensky.com/merchantkit/images/finance_buttons/plans/1969_320x100.jpg?v=3.0.311"
						alt="1969 - Reduced Rate 9.99% for 96 Months"/>
				</a>
			</div>
			<div>
				<img
					src="https://www.greensky.com/merchantkit/images/finance_buttons/footers/footer_320.jpg?v=3.0.311"
					alt="Financing for GreenSky&#169; credit programs is provided by federally insured, federal and state chartered financial institutions without regard to race, color, religion, national origin, sex or familial status. NMLS #1416362; CT SLC-1416362; NJMT #1501607 C22"/>
			</div>
		</div>
	)
}

export default FinancingBar;

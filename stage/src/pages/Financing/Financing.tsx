import React from 'react';
import styles from './Financing.module.sass';
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import FinancingOptionInterface from "../../interfaces/FinancingOptionInterface";
import GreenHollowButton from "../../inflatables/HollowButton/GreenHollowButton";

const GREEN_SKY_LOGO = require('../../static/images/greensky.svg');

class Financing extends React.Component {

	componentDidMount(){
		window.scrollTo(0,0);
	}

	options: Array<FinancingOptionInterface> = [
		{
			title: "NO INTEREST – NO PAYMENTS – FOR 12 MONTHS",
			description: "We are now offering special promotional financing. 12 Months with no payments, and PAY NO INTEREST. This special financing applies" +
				" to our Factory Direct Pricing on your hot tub. Don’t be held back from owning your dream hot tub, click below to start our convenient online application process!",
			finePrint: "*Subject to credit approval. Minimum monthly payments required during the promotional period. Making minimal monthly payments during" +
				" the promotional period will not pay off the entire principal balance. Interest is billed during the promotional period, but all interest is waived if the purchase amount is paid in full before the expiration of the promotional period. Financing for GreenSky® consumer loan programs is provided by federally insured, equal opportunity lender banks.NMLS#1416362",
			link: "https://www.greensky.com/prequal/gs/prequalify-for-loan/41002227/4124"
		},
		{
			title: "LOWEST APR – MONTHLY PAYMENT - 72 MONTHS",
			description: "Own a brand new hot tub for as low as $88 a month²! With new financing options available now from Hydro Heaven Spas, you can step" +
				" into that hot tub or swim spa you’ve always wanted, for a low monthly payment. Low fixed interest rates, and reduced rate loans are available. Conveniently apply online below.",
			finePrint: "*Fixed APR during the life of the loan. Subject to credit approval. Financing for GreenSky® consumer loan program s is provided by" +
				" federally insured, equal opportunity lender banks. NMLS# 1416362",
			link: "https://www.greensky.com/prequal/gs/prequalify-for-loan/41002227/5872"
		}
	];

	render() {
		return (
			<div className={styles.financing}>
				<DarkSlantTitle title={"Financing"}/>

				<div className={styles.companyOptions}>
					<div className={styles.company}>
						<img src={GREEN_SKY_LOGO} alt=""/>
						<div className={styles.description}>
							Patient Solutions ® are loan program names for certain consumer credit plans extended by participating lenders to borrowers for the
							purchase of goods and/or services from participating merchants/providers.
						</div>
					</div>
					<div className={styles.options}>
						{
							this.options.map((op, index) => {
								return <div className={styles.option} key={index}>
									<div className={styles.title}>{op.title}</div>
									<div className={styles.description}>{op.description}</div>
									<div className={styles.finePrint}>{op.finePrint}</div>
									<div className={styles.buttonHolder}>
										<GreenHollowButton title={"Apply Now"} link={op.link} width={100} external/>
									</div>
									<div className="clear"/>
								</div>
							})
						}
					</div>
				</div>

				{

				}
			</div>
		);
	}

}

export default Financing;
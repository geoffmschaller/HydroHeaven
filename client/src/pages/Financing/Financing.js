import React from 'react';
import styles from './Financing.module.sass';
import SectionTitle from "../../inflatables/SectionTitle/SectionTitle";

class Financing extends React.Component {

	options = [
		{
			title: "No Interest – No Payments – For 12 Months",
			description: "We are now offering special promotional financing. 12 Months with no payments, and PAY NO INTEREST. This special financing applies" +
				" to our Factory Direct Pricing on your hot tub. Don’t be held back from owning your dream hot tub, click below to start our convenient" +
				" online application process!",
			link: "https://www.greensky.com/prequal/gs/prequalify-for-loan/41002227/4124",
			finePrint: "*Subject to credit approval. Minimum monthly payments required during the promotional period. Making minimal monthly payments during the promotional period will not pay off the entire principal balance. Interest is billed during the promotional period, but all interest is waived if the purchase amount is paid in full before the expiration of the promotional period. Financing for GreenSky® consumer loan programs is provided by federally insured, equal opportunity lender banks.NMLS#1416362"
		},
		{
			title: "Lowest APR – Monthly Payment - 72 Months",
			description: "Own a brand new hot tub for as low as $88 a month²! With new financing options available now from Hydro Heaven Spas, you can step" +
				" into" +
				" that hot tub or swim spa you’ve always wanted, for a low monthly payment. Low fixed interest rates, and reduced rate loans are available. Conveniently apply online below.",
			link: "https://www.greensky.com/prequal/gs/prequalify-for-loan/41002227/5872",
			finePrint: "*Fixed APR during the life of the loan. Subject to credit approval. Financing for GreenSky® consumer loan program s is provided by federally insured, equal opportunity lender banks. NMLS# 1416362"
		}
	];

	render() {
		return (
			<div className={styles.financing}>
				<SectionTitle title={"Financing Options"}/>
				{
					this.options.map((op, index) => {
						return <div className={styles.option} key={index}>
							<div className={styles.title}>{op.title}</div>
							<div className={styles.description}>{op.description}</div>
							<div className={styles.finePrint}>{op.finePrint}</div>
							<a href={op.link}>
								<button className={styles.green}>Apply</button>
							</a>
							<div className="clear"/>

						</div>
					})
				}
			</div>
		);
	}

}

export default Financing;
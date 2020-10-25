import React, {createRef} from 'react';
import styles from './Financing.module.sass';
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import FinancingBar from "../../inflatables/FinancingBar/FinancingBar";

const GREEN_SKY_LOGO = require('../../static/images/greensky.svg');

class Financing extends React.Component {

	componentDidMount() {
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50)
	}

	scrollRef = createRef();

	render() {
		return (
			<div className={styles.financing}>
				<div ref={this.scrollRef}/>
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

}

export default Financing;

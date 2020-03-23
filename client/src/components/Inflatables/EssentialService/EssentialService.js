import React from "react";
import styles from './EssentialService.module.css';

class EssentialService extends React.Component {

	render() {
		return (
			<div className={styles.essentialService}>
				<div className={styles.attention}>Attention</div>
				<p>The San Luis Obispo County Health Department has listed Hydro Heaven as an <span className={styles.bold}>Essential Business </span>
					because of our sale of chlorine and
					other water sanitizers. As a result we have been asked to remain open during the shelter in place
					order.</p>
				<p>We promise to maintain <span className={styles.bold}>Clean Workspace Routines</span> in our stores as well as practice social
					distancing at
					six feet. We can also handle Will Call chemical purchases over the phone. </p>
				<p><span className={styles.bold}>Our Chemical Maintenance Service will remain on schedule</span> as we must continue to sanitize
					water, in
					accordance to public health standards.</p>
				<p><span className={styles.bold}>Until further notice the new store hours are as follows: M-F 9:30A - 4P, Sat 10A - 3P.</span></p>
				<div className={styles.thankYou}>- Thank you, from the Hydro Heaven team.</div>
			</div>
		);
	};

}

export default EssentialService;
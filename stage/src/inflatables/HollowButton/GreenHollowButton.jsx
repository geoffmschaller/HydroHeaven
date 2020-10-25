import React from 'react';
import styles from './HollowButton.module.sass';
import {Link} from "react-router-dom";

class GreenHollowButton extends React.Component {

	render() {

		let width = window.innerWidth;

		return (
			<div className={styles.hollowButton} style={{maxWidth: `${width > 850 ? this.props.width : 100}%`}}>
				{
					this.props.external
						? <a href={this.props.link}>
							<div className={[styles.button, styles.green].join(" ")}>
								<div className={styles.text}>{this.props.title}</div>
							</div>
						</a>
						: <Link to={this.props.link}>
							<div className={[styles.button, styles.green].join(" ")}>
								<div className={styles.text}>{this.props.title}</div>
							</div>
						</Link>
				}
			</div>
		);
	}

}

export default GreenHollowButton;
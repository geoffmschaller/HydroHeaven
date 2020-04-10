import React from 'react';
import styles from './HollowButton.module.sass';
import {Link} from "react-router-dom";

interface HollowButtonProps {
	title: string,
	link: string,
	width: number,
	external: boolean
}

class DarkHollowButton extends React.Component<HollowButtonProps, {}> {

	render() {

		let width = window.innerWidth;

		return (
			<div className={styles.hollowButton} style={{maxWidth: `${width > 850 ? this.props.width : 100}%`}}>
				{
					this.props.external
						? <a href={this.props.link}>
							<div className={[styles.button, styles.dark].join(" ")}>
								<div className={styles.text}>{this.props.title}</div>
							</div>
						</a>
						: <Link to={this.props.link}>
							<div className={[styles.button, styles.dark].join(" ")}>
								<div className={styles.text}>{this.props.title}</div>
							</div>
						</Link>
				}
			</div>
		);
	}

}

export default DarkHollowButton;
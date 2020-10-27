import React from 'react';
import styles from './Button.module.sass';
import {Link} from "react-router-dom";
import propTypes from 'prop-types';

const HollowButton = (props) => {

	let destination;
	switch (props.color) {
		case 'dark':
			destination = <div className={[styles.button, styles.dark].join(" ")}>{props.title}</div>;
			break;
		case 'green':
			destination = <div className={[styles.button, styles.green].join(" ")}>{props.title}</div>;
			break;
		default:
			destination = <div className={[styles.button, styles.white].join(" ")}>{props.title}</div>
			break;
	}

	return (
		<div className={styles.hollowButton} style={{maxWidth: window.innerWidth > 850 ? props.width + '%' : `100%`}}>
			{
				props.external
					? <a href={props.link} target={"_blank"} rel={"noreferrer"}>
						{destination}
					</a>
					: <Link to={props.link}>
						{destination}
					</Link>
			}
		</div>
	);
}

HollowButton.propTypes = {
	color: propTypes.oneOf(['dark', 'green', 'white']).isRequired,
	width: propTypes.number.isRequired,
	title: propTypes.string.isRequired,
	external: propTypes.bool.isRequired,
	link: propTypes.string.isRequired,
	style: propTypes.object,
}

export default HollowButton;
import React from 'react';
import styles from './Button.module.sass';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

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
		<div className={styles.hollowButton} style={{ maxWidth: window.innerWidth > 850 ? props.width + '%' : `100%` }}>
			{
				props.link.toString().indexOf('/static') > -1
					? <a {...props} href={props.link} target={"_blank"} rel={"noreferrer"}>
						{destination}
					</a>
					: <Link {...props} to={props.link}>
						{destination}
					</Link>
			}
		</div>
	);
}

HollowButton.propTypes = {
	color: PropTypes.oneOf(['dark', 'green', 'white']).isRequired,
	width: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	style: PropTypes.object,
}

export default HollowButton;
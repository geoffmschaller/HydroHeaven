import React from 'react';
import styles from './Button.module.sass';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const SolidButton = (props) => {

	let destination = <div className={[styles.button, styles.white].join(" ")}
	                       style={{backgroundColor: props.color, border: `2px solid ${props.color}`}}>{props.title}</div>;

	return (
		<div className={styles.solidButton} style={{maxWidth: window.innerWidth > 850 ? props.width + '%' : `100%`}}>
			{
				props.link.indexOf('http://') > -1 || props.link.indexOf('https://') > -1
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

SolidButton.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	title: PropTypes.any.isRequired,
	link: PropTypes.string.isRequired,
	style: PropTypes.object,
}

export default SolidButton;
import React from 'react';
import styles from './Button.module.sass';
import {Link} from "react-router-dom";
import propTypes from 'prop-types';

const SolidButton = (props) => {

	let destination = <div className={[styles.button, styles.white].join(" ")}
	                       style={{backgroundColor: props.color, border: `2px solid ${props.color}`}}>{props.title}</div>;

	return (
		<div className={styles.solidButton} style={{maxWidth: window.innerWidth > 850 ? props.width + '%' : `100%`}}>
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

SolidButton.propTypes = {
	color: propTypes.string.isRequired,
	width: propTypes.number.isRequired,
	title: propTypes.any.isRequired,
	external: propTypes.bool.isRequired,
	link: propTypes.string.isRequired,
	style: propTypes.object,
}

export default SolidButton;
import React from 'react';
import styles from './Button.module.sass';
import {Link} from "react-router-dom";

const Button = props => {

	let button = <button {...props} style={{
		backgroundColor: props.color,
		border: `2px solid ${props.color}`,
		color: 'white'
	}}>{props.title}</button>
	if (props.hollow) {
		button = <button {...props} style={{
			backgroundColor: 'transparent',
			color: props.color,
			border: `2px solid ${props.color}`
		}}>{props.title}</button>
	}
	return (
		props.link.toString().indexOf('/static') > -1
			? <a href={props.link} target={"_blank"} rel={"noreferrer"}>
				{button}
			</a>
			: <Link to={props.link}>
				{button}
			</Link>
	)
}

export default Button;
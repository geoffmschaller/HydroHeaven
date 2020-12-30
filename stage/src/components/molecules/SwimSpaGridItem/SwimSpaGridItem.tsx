import React, {FunctionComponent} from 'react';
import styles from './SwimSpaGridItem.module.sass';
import {Link} from "react-router-dom";
import SwimSpa from "../../../types/SwimSpa";

interface Props {
	swimSpa: SwimSpa
}

const SwimSpaGridItem: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.swimSpaGridItem}>
			<Link to={`/swim-spas/${props.swimSpa.id}`}>
				<img src={props.swimSpa.image} alt=""/>
				<div className={styles.title}>{props.swimSpa.name}</div>
				<div className={styles.brand}>By {props.swimSpa.brand}</div>
			</Link>
		</div>
	)
}

export default SwimSpaGridItem;
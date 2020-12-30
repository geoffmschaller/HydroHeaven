import React, {FunctionComponent} from 'react';
import styles from './HotTubGridItem.module.sass';
import HotTub from "../../../types/HotTub";
import {Link} from "react-router-dom";

interface Props {
	hotTub: HotTub
}

const HotTubGridItem: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.hotTubGridItem}>
			<Link to={`/spas-hot-tubs/${props.hotTub.id}`}>
				<img src={props.hotTub.image} alt=""/>
				<div className={styles.title}>{props.hotTub.name}</div>
				<div className={styles.brand}>By {props.hotTub.brand}</div>
			</Link>
		</div>
	)
}

export default HotTubGridItem;
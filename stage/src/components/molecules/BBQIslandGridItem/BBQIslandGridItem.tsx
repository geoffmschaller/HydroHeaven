import React, {FunctionComponent} from 'react';
import styles from './BBQIslandGridItem.module.sass';
import {Link} from "react-router-dom";
import BBQ from "../../../types/BBQ";

interface Props {
	bbqIsland: BBQ
}

const BBQIslandGridItem: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.bbqIslandGridItem}>
			<Link to={`/bbq-islands/${props.bbqIsland.id}`}>
				<img src={props.bbqIsland.image} alt=""/>
				<div className={styles.title}>{props.bbqIsland.name}</div>
				<div className={styles.brand}>By {props.bbqIsland.brand}</div>
			</Link>
		</div>
	)
}

export default BBQIslandGridItem;
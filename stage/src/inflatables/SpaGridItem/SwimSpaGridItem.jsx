import React from 'react';
import styles from './SpaGridItem.module.sass';
import Button from '../Buttons/Button';

const SwimSpaGridItem = props => {
	return (
		<div className={styles.spaGridItem}>
			<img src={props.spa.image} alt=""/>
			<div className={styles.name}>{props.spa.name}</div>
			<div className={styles.brand}>By {props.spa.brand}</div>
			<Button title="View Details" link={`/swim-spas/view/${props.spa.id}`} color="#3498db" hollow="true" onClick={props.click}/>
		</div> 
	);
}

export default SwimSpaGridItem;

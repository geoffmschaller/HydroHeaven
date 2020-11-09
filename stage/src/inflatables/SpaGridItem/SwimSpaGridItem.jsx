import React from 'react';
import styles from './SpaGridItem.module.sass';
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import HollowButton from '../Buttons/HollowButton';

const SwimSpaGridItem = props => {
	return (
		<div className={styles.spaGridItem}>
			<img src={props.spa.image} alt=""/>
			<div className={styles.name}>{props.spa.name}</div>
			<div className={styles.brand}>By {props.spa.brand}</div>
			<DeliveryDate stocked={props.spa.stocked}/>
			<HollowButton title={"View Details"} color={'dark'} external={false} link={'/swim-spas/view/' + props.spa.id} width={100}/>
		</div>
	);
}

export default SwimSpaGridItem;

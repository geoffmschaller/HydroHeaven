import React from 'react';
import styles from './SpaGridItem.module.sass';
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import HollowButton from '../Buttons/HollowButton';

const SpaGridItem = props => {
	return (
		<div className={styles.spaGridItem}>
			<img src={props.spa.image} alt=""/>
			<div className={styles.name}>{props.spa.name}</div>
			<div className={styles.brand}>By {props.spa.brand}</div>
			<DeliveryDate stocked={props.spa.stocked}/>
			<HollowButton width={100} link={"/spas-hot-tubs/view/" + props.spa.id} external={false} color={'dark'} title={"View Details"}/>
		</div>
	);
}

export default SpaGridItem;

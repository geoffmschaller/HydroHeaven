import React from 'react';
import styles from './SpaGridItem.module.sass';
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import HollowButton from '../Buttons/HollowButton';

class SpaGridItem extends React.Component {

	render() {

		return (
			<div className={styles.spaGridItem}>
				<img src={this.props.spa.image} alt=""/>
				<div className={styles.name}>{this.props.spa.name}</div>
				<div className={styles.brand}>By {this.props.spa.brand}</div>
				<DeliveryDate stocked={this.props.spa.stocked}/>
				<HollowButton width={100} link={"/spas-hot-tubs/view/" + this.props.spa.id} external={false} color={'dark'} title={"View Details"}/>
			</div>
		);
	}
}

export default SpaGridItem;

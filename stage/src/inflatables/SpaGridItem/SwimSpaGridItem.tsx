import React from 'react';
import styles from './SpaGridItem.module.sass';
import {Link} from "react-router-dom";
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import SwimSpaInterface from "../../interfaces/SwimSpaInterface";

interface SpaGridItemProps {
	spa: SwimSpaInterface
}

class SwimSpaGridItem extends React.Component<SpaGridItemProps, {}> {

	render() {

		return (
			<div className={styles.spaGridItem}>
				<img src={this.props.spa.image} alt=""/>
				<div className={styles.name}>{this.props.spa.name}</div>
				<div className={styles.brand}>By {this.props.spa.brand}</div>
				<DeliveryDate stocked={this.props.spa.stocked}/>
				<Link to={"/swim-spas/view/" + this.props.spa.id}>
					<button>View Details</button>
				</Link>
			</div>
		);
	}
}

export default SwimSpaGridItem;
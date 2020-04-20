import React from 'react';
import styles from './SpaGridItem.module.sass';
import SpaDataInterface from "../../interfaces/SpaDataInterface";
import {Link} from "react-router-dom";
import DeliveryDate from "../DeliveryDate/DeliveryDate";

interface SpaGridItemProps {
	spa: SpaDataInterface
}

class SpaGridItem extends React.Component<SpaGridItemProps, {}> {

	render() {

		return (
			<div className={styles.spaGridItem}>
				<img src={this.props.spa.image} alt=""/>
				<div className={styles.name}>{this.props.spa.name}</div>
				<div className={styles.brand}>By {this.props.spa.brand}</div>
				<DeliveryDate stocked={this.props.spa.stocked}/>
				<Link to={"/spas-hot-tubs/view/" + this.props.spa.id}>
					<button>View Details</button>
				</Link>
			</div>
		);
	}
}

export default SpaGridItem;
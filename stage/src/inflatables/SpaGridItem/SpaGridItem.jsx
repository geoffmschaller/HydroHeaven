import React from 'react';
import styles from './SpaGridItem.module.sass';
import {Link} from "react-router-dom";
import DeliveryDate from "../DeliveryDate/DeliveryDate";

class SpaGridItem extends React.Component {

	render() {

		return (
			<div className={styles.spaGridItem}>
				<img src={this.props.spa.image} alt=""/>
				<div className={styles.name}>{this.props.spa.name}</div>
				<div className={styles.brand}>By {this.props.spa.brand}</div>
				<DeliveryDate stocked={this.props.spa.stocked}/>
				<Link to={"/spas-hot-tubs/view/" + this.props.spa.id} onClick={() => this.props.click()}>
					<button>View Details</button>
				</Link>
			</div>
		);
	}
}

export default SpaGridItem;

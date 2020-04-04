import React from 'react';
import styles from './SpaGridItem.module.sass';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import PriceReview from "../PriceReview/PriceReview";
import Availability from "../Availability/Availability";

class SpaGridItem extends React.Component {


	render() {


		return (
			<div className={styles.spaGridItem}>
				<img src={this.props.spa.image} alt=""/>
				<div className={styles.name}>{this.props.spa.name}</div>
				<div className={styles.brand}>By {this.props.spa.brand}</div>
				<div className={styles.availability}>
					<Availability stocked={this.props.spa.stocked}/>
				</div>
				<PriceReview price={this.props.spa.price} reviews={this.props.spa.reviews}/>
				{
					this.props.update
						? <Link to={`/spas-hot-tubs/view/${this.props.spa.id}`}>
							<button onClick={() => this.props.update()}>View Details</button>
						</Link>
						: <Link to={`/spas-hot-tubs/view/${this.props.spa.id}`}>
							<button>View Details</button>
						</Link>
				}
			</div>
		);
	}


}

SpaGridItem.propTypes = {
	spa: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		brand: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		reviews: PropTypes.arrayOf(PropTypes.shape({
			rating: PropTypes.number.isRequired,
			review: PropTypes.string.isRequired
		})).isRequired,
		stocked: PropTypes.bool.isRequired
	}).isRequired,
	update: PropTypes.func
};

export default SpaGridItem;
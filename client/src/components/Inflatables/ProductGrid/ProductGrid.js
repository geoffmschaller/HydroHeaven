import React from 'react';
import styles from './ProductGrid.module.css';
import PropTypes from 'prop-types';
import {getBrandFromId, getNameFromId} from "../../../utils/StringHelpers";
import {Link} from "react-router-dom";

class ProductGrid extends React.Component {

	render() {

		let prods = [];
		if (this.props.count > 0) {
			for (let i = 0; i < this.props.count; i++) {
				prods.push(this.props.productData[Math.floor(Math.random() * this.props.productData.length)]);
			}
		} else {
			prods = this.props.productData;
		}

		return (
			<div className={styles.featured}>
				{
					!this.props.click ?
						prods.map((prod, index) => {
							return <div className={styles.bbq} key={index}>
								<img src={prod.image} alt=""/>
								<div className={styles.title}>{getNameFromId(prod.id)}</div>
								<div className={styles.brand}>By {getBrandFromId(prod.id)}</div>
								<Link to={this.props.link + prod.id}>
									<button>View Details</button>
								</Link>
								<div className="clear"/>
							</div>
						}) :
						prods.map((prod, index) => {
							return <div className={styles.bbq} key={index}>
								<img src={prod.image} alt=""/>
								<div className={styles.title}>{getNameFromId(prod.id)}</div>
								<div className={styles.brand}>By {getBrandFromId(prod.id)}</div>
								<Link to={this.props.link + prod.id} onClick={() => this.props.click(prod.id)}>
									<button>View Details</button>
								</Link>
								<div className="clear"/>
							</div>
						})
				}
			</div>
		);
	}
}

ProductGrid.propTypes = {
	productData: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired
	})).isRequired,
	link: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	click: PropTypes.func
};

export default ProductGrid;
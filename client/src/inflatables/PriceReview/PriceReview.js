import React from 'react';
import styles from './PriceReview.module.sass';
import PropTypes from 'prop-types';

class PriceReview extends React.Component {

	render() {

		let priceDisplay = [];
		let priceCategory;
		if (this.props.price < 5000)
			priceCategory = 1;
		else if (this.props.price < 6000)
			priceCategory = 2;
		else if (this.props.price < 7000)
			priceCategory = 3;
		else if (this.props.price < 8000)
			priceCategory = 4;
		else
			priceCategory = 5;
		for (let i = 0; i < priceCategory; i++) {
			priceDisplay.push(<i className="fas fa-dollar-sign" key={i}/>)
		}

		let ratingDisplay = [];
		let emptyClass = "";
		let tempRating = 0;

		for (let i = 0; i < this.props.reviews.length; i++) {
			tempRating += this.props.reviews[i].rating;
		}

		tempRating = tempRating / this.props.reviews.length;

		for (let i = 0; i < Math.floor(tempRating); i++) {
			ratingDisplay.push(<i className="fas fa-star" key={"whole" + i}/>);
		}
		if (tempRating.toString().indexOf(".") >= 0) {
			ratingDisplay.push(<i className="fas fa-star-half-alt" key={"half"}/>);
		}
		for (let i = ratingDisplay.length; i < 5; i++) {
			ratingDisplay.push(<i className="far fa-star" key={"half" + i}/>);
		}
		if (this.props.reviews.length === 0) {
			emptyClass = styles.empty;
		}

		return (
			<div className={styles.priceReview}>
				<div className={[styles.reviews, emptyClass].join(" ")}>
					{
						this.props.reviews.length > 0
							? <div>{ratingDisplay} <span className={styles.count}>({this.props.reviews.length})</span></div>
							: <div>No Reviews Yet</div>
					}
				</div>
				|
				<div className={styles.price}>{priceDisplay}</div>
			</div>
		);
	}

}

PriceReview.propTypes = {
	price: PropTypes.number.isRequired,
	reviews: PropTypes.arrayOf(PropTypes.shape({
		rating: PropTypes.number.isRequired,
		review: PropTypes.string.isRequired
	}))
};

export default PriceReview;
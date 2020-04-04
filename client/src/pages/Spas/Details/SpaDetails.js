import React from 'react';
import {SpaData} from "../../../data/SpaData";
import styles from './SpaDetails.module.sass';
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {AcrylicData} from "../../../data/AcrylicData";
import {CabinetData} from "../../../data/CabinetData";
import PriceReview from "../../../inflatables/PriceReview/PriceReview";
import SpaGridItem from "../../../inflatables/SpaGridItem/SpaGridItem";
import {VITA_SPAS} from "../../../data/BrandsData";
import AmericanWhirlpoolBrochure from '../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf';
import VitaSpasBrochure from '../../../static/pdfs/brochures/VitaSpasBrochure.pdf';
import Availability from "../../../inflatables/Availability/Availability";

class SpaDetails extends React.Component {

	state = {
		selectedSpa: SpaData[0],
		acrylicLabel: "Acrylic Options:",
		cabinetLabel: "Cabinet Options:"
	};

	componentDidMount() {
		this.getSelectedSpa(this.props.match.url.replace("/spas-hot-tubs/view/", ""));
	}

	getSelectedSpa = (id) => {
		window.scrollTo(0, 0);
		let spa = SpaData.filter(spa => spa.id === id)[0];
		if (!spa) {
			this.props.history.push("/spas-hot-tubs");
			return;
		}
		this.setState({selectedSpa: spa});
	};

	setAcrylicLabel = (label = "Acrylic Options:") => {
		this.setState({acrylicLabel: label});
	};

	setCabinetLabel = (label = "Cabinet Options:") => {
		this.setState({cabinetLabel: label});
	};

	alsoViewed = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];


	render() {
		return (
			<div className={styles.spaDetails}>
				<SectionTitle title={this.state.selectedSpa.brand + " - " + this.state.selectedSpa.name}/>
				<div className={styles.priceReview}>
					<PriceReview price={this.state.selectedSpa.price} reviews={this.state.selectedSpa.reviews}/>
				</div>
				<div className={styles.lower}>
					<div className={styles.spaImage}>
						<img src={this.state.selectedSpa.image} alt=""/>
					</div>
					<div className={styles.information}>
						<div className={styles.availability}>
							<Availability stocked={this.state.selectedSpa.stocked}/>
						</div>
						<div className={styles.description}>{this.state.selectedSpa.description}</div>
						<div className={styles.stats}>
							<div className={styles.item}>{this.state.selectedSpa.jets} Jets</div>
							<div className={styles.item}>{this.state.selectedSpa.gallons} Gallons</div>
							<div className={styles.item}>{this.state.selectedSpa.seats} Seats</div>
							<div
								className={styles.item}>{`${this.state.selectedSpa.length}" x ${this.state.selectedSpa.width}" x ${this.state.selectedSpa.height}"`}</div>
						</div>
						<div className={styles.colors}>
							<div className={styles.acrylic} onMouseLeave={() => this.setAcrylicLabel()}>
								<div className={styles.title}>
									<div className={styles.text}>{this.state.acrylicLabel}</div>
								</div>
								<div className={styles.options}>
									{
										AcrylicData.map((ac, index) => {
											return <img src={ac.image} alt="" key={index} onMouseEnter={() => this.setAcrylicLabel(ac.name)}/>
										})
									}
								</div>
							</div>
							<div className={styles.cabinet} onMouseLeave={() => this.setCabinetLabel()}>
								<div className={styles.title}>
									<div className={styles.text}>{this.state.cabinetLabel}</div>
								</div>
								<div className={styles.options}>
									{
										CabinetData.map((cab, index) => {
											return <img src={cab.image} alt="" key={index} onMouseEnter={() => this.setCabinetLabel(cab.name)}/>
										})
									}
								</div>
							</div>
						</div>
						<div className={styles.docs}>
							<a href={this.state.selectedSpa.pdf}>
								<button>{this.state.selectedSpa.name} Spec Sheet</button>
							</a>
							{
								this.state.selectedSpa.brand === VITA_SPAS ? <a href={VitaSpasBrochure}>
									<button>{this.state.selectedSpa.brand} Brochure</button>
								</a> : <a href={AmericanWhirlpoolBrochure}>
									<button>{this.state.selectedSpa.brand} Brochure</button>
								</a>
							}

						</div>
					</div>
				</div>
				<div className={styles.alsoViewed}>
					<SectionTitle title={"Customers Also Viewed"}/>
					{
						this.alsoViewed.map((spa, index) => {
							return <SpaGridItem spa={spa} key={index} update={() => this.getSelectedSpa(spa.id)}/>
						})
					}
				</div>
				<div className={styles.reviews}>
					<SectionTitle title={"Reviews"}/>
					{
						this.state.selectedSpa.reviews.length === 0
							? <p className={styles.noReviews}>No Reviews Yet...</p>
							: this.state.selectedSpa.reviews.map((rev, index) => {
								return <div className={styles.review} key={index}>
									<div className={styles.rating}>{rev.rating} <i className="fas fa-star"/></div>
									<div className={styles.text}>{rev.review}</div>
									<div className={styles.date}>{rev.date}</div>
								</div>
							})
					}
				</div>
			</div>
		);
	}

}

export default SpaDetails;
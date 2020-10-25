import React, {createRef} from 'react';
import styles from './SwimSpasDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import DeliveryDate from "../../../inflatables/DeliveryDate/DeliveryDate";
import {CabinetData} from "../../../data/CabinetData";
import DarkHollowButton from '../../../inflatables/HollowButton/DarkHollowButton';
import SwimSpaGridItem from '../../../inflatables/SpaGridItem/SwimSpaGridItem';
import {SwimSpaData} from "../../../data/SwimSpaData";

const AMERICAN_WHIRLPOOL_BROCHURE = require('../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf');


class SwimSpasDetails extends React.PureComponent {

	scrollRef = createRef();

	state = {
		swimSpa: SwimSpaData[0],
		cabinetLabel: "",
		acrylicLabel: ""
	};

	componentDidMount() {
		let id = this.props.match.url.replace("/swim-spas/view/", "");
		this.getSpaData(id);
	}

	getSpaData = (newId) => {
		this.setState({swimSpa: SwimSpaData.filter((spa) => spa.id === newId)[0]});
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50)
	}

	setCabinetColor = (name) => {
		this.setState({cabinetLabel: name})
	};

	setAcrylicColor = (name) => {
		this.setState({acrylicLabel: name})
	};

	alsoViewed = [SwimSpaData[0], SwimSpaData[1], SwimSpaData[2], SwimSpaData[3]];

	render() {
		return (
			<div className={styles.spasHotTubsDetails}>
				<div ref={this.scrollRef}/>
				<DarkSlantTitle title={this.state.swimSpa.brand + " - " + this.state.swimSpa.name}/>
				<div className={styles.spaData}>
					<div className={styles.imageHolder}>
						<img src={this.state.swimSpa.image} alt=""/>
					</div>
					<div className={styles.dataHolder}>
						<div className={styles.availability}>
							<DeliveryDate stocked={this.state.swimSpa.stocked}/>
						</div>
						<div className={styles.description}>{this.state.swimSpa.description}</div>
						<div className={styles.stats}>
							<div className={styles.stat}>{this.state.swimSpa.seats} Seats</div>
							<div className={styles.stat}>{this.state.swimSpa.gallons} Gallons</div>
							<div className={styles.stat}>{this.state.swimSpa.jets} Jets</div>
							<div className={styles.stat}>{this.state.swimSpa.length}" x {this.state.swimSpa.width}" x {this.state.swimSpa.height}"</div>
						</div>
						<div className={styles.colors}>
							<div className={styles.acrylic} onMouseLeave={() => this.setAcrylicColor("")}>
								<div className={styles.colorTitle}>Acrylic Choices: {this.state.acrylicLabel}</div>
								<div className={styles.itemHolder}>
									{
										this.state.swimSpa.acrylic.map((acr, index) => {
											return <img className={styles.item} src={acr.image} key={index}
											            onMouseEnter={() => this.setAcrylicColor(acr.name)} alt=""/>
										})
									}
								</div>
							</div>
							<div className={styles.cabinet} onMouseLeave={() => this.setCabinetColor("")}>
								<div className={styles.colorTitle}>Cabinet Choices: {this.state.cabinetLabel}</div>
								<div className={styles.itemHolder}>
									{
										CabinetData.map((cab, index) => {
											return <img className={styles.item} src={cab.image} key={index}
											            onMouseEnter={() => this.setCabinetColor(cab.name)} alt=""/>
										})
									}
								</div>
							</div>
						</div>
						<div className={styles.docs}>
							<div className={styles.docTitle}>Spa Documents</div>
							<div className={styles.docHolder}>
								<DarkHollowButton title={this.state.swimSpa.name + " Spec Sheet"} width={50} link={this.state.swimSpa.pdf} external/>
								<DarkHollowButton title={"American Whirlpool Brochure"} width={50} link={AMERICAN_WHIRLPOOL_BROCHURE} external/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.alsoViewed}>
					<DarkSlantTitle title={"Customers Also Viewed"}/>
					<div className={styles.gridHolder}>
						{
							this.alsoViewed.map((spa, index) => {
								return <SwimSpaGridItem spa={spa} key={index} click={() => this.getSpaData(spa.id)}/>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default SwimSpasDetails;

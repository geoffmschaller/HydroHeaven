import React from 'react';
import styles from './SpasHotTubsDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import {SpaData} from "../../../data/SpaData";
import {RouteComponentProps} from "react-router";
import DeliveryDate from "../../../inflatables/DeliveryDate/DeliveryDate";
import {AcrylicData} from "../../../data/AcrylicData";
import {CabinetData} from "../../../data/CabinetData";
import DarkHollowButton from '../../../inflatables/HollowButton/DarkHollowButton';
import {AMERICAN_WHIRLPOOL} from '../../../data/BrandsData';
import SpaGridItem from '../../../inflatables/SpaGridItem/SpaGridItem';
import SpaDataInterface from '../../../interfaces/SpaDataInterface';

const AMERICAN_WHIRLPOOL_BROCHURE = require('../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf');
const VITA_SPAS_BROCHURE = require('../../../static/pdfs/brochures/VitaSpasBrochure.pdf');

class SpasHotTubsDetails extends React.Component<RouteComponentProps, any> {

	state = {
		spa: SpaData[0],
		cabinetLabel: "",
		acrylicLabel: ""
	};

	componentDidMount(): void {
		window.scrollTo(0,0);
		let id = this.props.match.url.replace("/spas-hot-tubs/view/", "");
		this.setState({spa: SpaData.filter((spa) => spa.id === id)[0]})
	}

	setCabinetColor = (name: string) => {
		this.setState({cabinetLabel: name})
	};

	setAcrylicColor = (name: string) => {
		this.setState({acrylicLabel: name})
	};

	alsoViewed: Array<SpaDataInterface> = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	render() {
		return (
			<div className={styles.spasHotTubsDetails}>
				<DarkSlantTitle title={this.state.spa.brand + " - " + this.state.spa.name}/>
				<div className={styles.spaData}>
					<div className={styles.imageHolder}>
						<img src={this.state.spa.image} alt=""/>
					</div>
					<div className={styles.dataHolder}>
						<div className={styles.availability}>
							<DeliveryDate stocked={this.state.spa.stocked}/>
						</div>
						<div className={styles.description}>{this.state.spa.description}</div>
						<div className={styles.stats}>
							<div className={styles.stat}>{this.state.spa.seats} Seats</div>
							<div className={styles.stat}>{this.state.spa.gallons} Gallons</div>
							<div className={styles.stat}>{this.state.spa.jets} Jets</div>
							<div className={styles.stat}>{this.state.spa.length}" x {this.state.spa.width}" x {this.state.spa.height}"</div>
						</div>
						<div className={styles.colors}>
							<div className={styles.acrylic} onMouseLeave={() => this.setAcrylicColor("")}>
								<div className={styles.colorTitle}>Acrylic Choices: {this.state.acrylicLabel}</div>
								<div className={styles.itemHolder}>
									{
										AcrylicData.map((acr, index) => {
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
								<DarkHollowButton title={this.state.spa.name + " Spec Sheet"} width={50} link={this.state.spa.pdf} external/>
								{
									this.state.spa.brand === AMERICAN_WHIRLPOOL
										? <DarkHollowButton title={"American Whirlpool Brochure"} width={50} link={AMERICAN_WHIRLPOOL_BROCHURE} external/>
										: <DarkHollowButton title={"Vita Spas Brochure"} width={50} link={VITA_SPAS_BROCHURE} external/>
								}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.alsoViewed}>
					<DarkSlantTitle title={"Customers Also Viewed"}/>
					<div className={styles.gridHolder}>
						{
							this.alsoViewed.map((spa, index) => {
								return <SpaGridItem spa={spa} key={index}/>
							})
						}
					</div>
				</div>
			</div>
		);
	}

}

export default SpasHotTubsDetails;
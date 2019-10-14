import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import SWIM_SPA_HEADER from "../../../static/images/headers/swim_spa_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import {SwimSpaData} from "../../../data/SwimSpaData";
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import {getBrandFromId, getNameFromId} from "../../../utils/StringHelpers";
import styles from './SwimSpaDetails.module.css';
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import {AcrylicData} from "../../../data/AcrylicData";
import {CabinetData} from "../../../data/CabinetData";
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";
import NavigationBar from "../../Inflatables/NavigationBar/NavigationBar";
import Footer from "../../Inflatables/Footer/Footer";

class SwimSpaDetails extends React.Component {

	constructor(props) {
		super(props);
		this.scrollRef = React.createRef();
	}

	state = {
		selectedSpa: null
	};

	componentDidMount() {
		this.getSelectedSpa(this.props.match.url.replace("/swim-spas/", ""));
	}

	getSelectedSpa = (id) => {
		let spa = SwimSpaData.filter(spa => {
			return spa.id === id;
		});
		if (spa.length > 0) {
			this.setState({selectedSpa: spa[0]});
			window.scrollTo(0, this.scrollRef.current.offsetTop);
		} else {
			this.props.history.push("/swim-spas");
		}
	};


	render() {
		return (
			<>
				<NavigationBar/>
				<MainHeader media={SWIM_SPA_HEADER} type={IMAGE_FILE}/>
				<div className="widthRestriction">
					<div ref={this.scrollRef}/>
					<VerticalSpacer height={50}/>
					{
						this.state.selectedSpa ?
							<div>
								<Block float={FLOAT_LEFT} width={30}>
									<div className={styles.spaImage}>
										<img src={this.state.selectedSpa.image} alt=""/>
									</div>
								</Block>
								<Block float={FLOAT_RIGHT} width={70}>
									<SectionTitle title={"Spa Details"}/>
									<div className={styles.spaDetails}>
										<div className={styles.name}>{getNameFromId(this.state.selectedSpa.id)}</div>
										<div className={styles.brand}>By {getBrandFromId(this.state.selectedSpa.id)}</div>
										<p>{this.state.selectedSpa.description}</p>
										<div className={styles.iconBar}>
											<div className={styles.item}>
												<i className="fad fa-users"/>
												<div className={styles.label}>x {this.state.selectedSpa.seats} Seats</div>
											</div>
											<div className={styles.item}>
												<i className="fad fa-flame"/>
												<div className={styles.label}>x {this.state.selectedSpa.jets} Jets</div>
											</div>
											<div className={styles.item}>
												<i className="fad fa-tint"/>
												<div className={styles.label}>x {this.state.selectedSpa.gallons} Gallons</div>
											</div>
											<div className={styles.item}>
												<i className="fad fa-ruler-combined"/>
												<div className={styles.label}>{this.state.selectedSpa.length}" x {this.state.selectedSpa.width}"
													x {this.state.selectedSpa.height}</div>
											</div>
										</div>
										<VerticalSpacer height={25}/>
										<a href={this.state.selectedSpa.pdf}>
											<button>View Swim Spa Spec Sheet</button>
										</a>
										<div className="clear"/>
									</div>
									<VerticalSpacer height={50}/>
								</Block>
								<div className="clear"/>
								<div className={styles.spaOptions}>
									<SectionTitle title={"Acrylic Options"}/>
									{
										AcrylicData.map((acrylic, index) => {
											return <div className={styles.option} key={index}>
												<img src={acrylic.image} alt=""/>
												<div className={styles.label}>{acrylic.name}</div>
											</div>
										})
									}
								</div>
								<VerticalSpacer height={50}/>
								<div className={styles.spaOptions}>
									<SectionTitle title={"Cabinet Options"}/>
									{
										CabinetData.map((cabinet, index) => {
											return <div className={styles.option} key={index}>
												<img src={cabinet.image} alt=""/>
												<div className={styles.label}>{cabinet.name}</div>
											</div>
										})
									}
								</div>
								<VerticalSpacer height={50}/>
								<SectionTitle title={"People Also Viewed"}/>
								<div className={styles.alsoViewed}>
									<ProductGrid productData={SwimSpaData} link={"/swim-spas/"} count={4} click={(id) => this.getSelectedSpa(id)}/>
								</div>
							</div> : null
					}
				</div>
				<div className="clear"/>
				<VerticalSpacer height={150}/>
				<Footer/>
			</>
		);
	}

}

export default SwimSpaDetails;
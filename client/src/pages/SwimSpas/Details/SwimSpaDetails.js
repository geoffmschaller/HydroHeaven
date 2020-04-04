import React from 'react';
import VerticalSpacer from "../../../inflatables/VerticalSpacer/VerticalSpacer";
import {SwimSpaData} from "../../../data/SwimSpaData";
import Block from "../../../inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import styles from './SwimSpaDetails.module.sass';
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {AcrylicData} from "../../../data/AcrylicData";
import {CabinetData} from "../../../data/CabinetData";
import ProductGrid from "../../../inflatables/ProductGrid/ProductGrid";

class SwimSpaDetails extends React.Component {

	state = {
		selectedSpa: SwimSpaData[0]
	};

	componentDidMount() {
		window.scrollTo(0, 0);
		this.getSelectedSpa(this.props.match.url.replace("/swim-spas/", ""));
	}

	getSelectedSpa = (id) => {
		let spa = SwimSpaData.filter(spa => spa.id === id)[0];
		if (!spa) {
			this.props.history.push("/swim-spas");
		}
		this.setState({selectedSpa: spa});
		window.scrollTo(0, 0);
	};


	render() {
		return (
			<>
				<div className="widthRestriction">
					<VerticalSpacer height={50}/>
					<div>
						<Block float={FLOAT_LEFT} width={30}>
							<div className={styles.spaImage}>
								<img src={this.state.selectedSpa.image} alt=""/>
							</div>
						</Block>
						<Block float={FLOAT_RIGHT} width={70}>
							<SectionTitle title={"Spa Details"}/>
							<div className={styles.spaDetails}>
								<div className={styles.name}>{this.state.selectedSpa.name}</div>
								<div className={styles.brand}>By {this.state.selectedSpa.brand}</div>
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
					</div>
				</div>
				<div className="clear"/>
			</>
		);
	}

}

export default SwimSpaDetails;
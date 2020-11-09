import React, {createRef, useState, useEffect} from 'react';
import styles from './SwimSpasDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import CabinetData from "../../../data/CabinetData";
import SwimSpaGridItem from '../../../inflatables/SpaGridItem/SwimSpaGridItem';
import SwimSpaData from "../../../data/SwimSpaData";
import {connect} from 'react-redux';
import SendPageView from '../../../api/analyticsAPICalls';
import Button from '../../../inflatables/Buttons/Button';

const AMERICAN_WHIRLPOOL_BROCHURE = require('../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf');


const SwimSpasDetails = props => {

	const [currentSwimSpa, setCurrentSwimSpas] = useState(SwimSpaData[0]);
	const [cabinetLabel, setCabinetLabel] = useState('');
	const [acrylicLabel, setAcrylicLabel] = useState('');

	const scrollRef = createRef();

	const getSpaData = (newId) => {
		setCurrentSwimSpas(SwimSpaData.filter((spa) => spa.id === newId)[0]);
		SendPageView(props.session, "/swim/" + currentSwimSpa.name);
		window.scrollTo(0, scrollRef.current.offsetTop - 50)
	}

	const setCabinetColor = (name) => {
		setCabinetLabel(name);
	};

	const setAcrylicColor = (name) => {
		setAcrylicLabel(name);
	};

	const alsoViewed = [SwimSpaData[0], SwimSpaData[1], SwimSpaData[2], SwimSpaData[3]];

	useEffect(() => {
		getSpaData(props.match.url.replace("/swim-spas/view/", ""));
	}, []);

	return (
		<div className={styles.spasHotTubsDetails}>
			<div ref={scrollRef}/>
			<DarkSlantTitle title={currentSwimSpa.brand + " - " + currentSwimSpa.name}/>
			<div className={styles.spaData}>
				<div className={styles.imageHolder}>
					<img src={currentSwimSpa.image} alt=""/>
				</div>
				<div className={styles.dataHolder}>
					<div className={styles.description}>{currentSwimSpa.description}</div>
					<div className={styles.stats}>
						<div className={styles.stat}>{currentSwimSpa.seats} Seats</div>
						<div className={styles.stat}>{currentSwimSpa.gallons} Gallons</div>
						<div className={styles.stat}>{currentSwimSpa.jets} Jets</div>
						<div className={styles.stat}>{currentSwimSpa.length}" x {currentSwimSpa.width}" x {currentSwimSpa.height}"
						</div>
					</div>
					<div className={styles.colors}>
						<div className={styles.acrylic} onMouseLeave={() => setAcrylicColor("")}>
							<div className={styles.colorTitle}>Acrylic Choices: {acrylicLabel}</div>
							<div className={styles.itemHolder}>
								{
									currentSwimSpa.acrylic.map((acr, index) => {
										return <img className={styles.item} src={acr.image} key={index}
													onMouseEnter={() => setAcrylicColor(acr.name)} alt=""/>
									})
								}
							</div>
						</div>
						<div className={styles.cabinet} onMouseLeave={() => setCabinetColor("")}>
							<div className={styles.colorTitle}>Cabinet Choices: {cabinetLabel}</div>
							<div className={styles.itemHolder}>
								{
									CabinetData.map((cab, index) => {
										return <img className={styles.item} src={cab.image} key={index}
													onMouseEnter={() => setCabinetColor(cab.name)} alt=""/>
									})
								}
							</div>
						</div>
					</div>
					<div className={styles.docs}>
						<div className={styles.docTitle}>Spa Documents</div>
						<div className={styles.docHolder}>
							<Button title={`${currentSwimSpa.name} Spec Sheet`} link={currentSwimSpa.pdf} color="#3498db" hollow="true"/>
							<Button title={"American Whirlpool Brochure"} link={AMERICAN_WHIRLPOOL_BROCHURE.default} color="#3498db" hollow="true"/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.alsoViewed}>
				<DarkSlantTitle title={"Customers Also Viewed"}/>
				<div className={styles.gridHolder}>
					{
						alsoViewed.map((spa, index) => {
							return <SwimSpaGridItem spa={spa} key={index} click={() => getSpaData(spa.id)}/>
						})
					}
				</div>
			</div>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		session: state.session
	};
}


export default connect(mapStateToProps)(SwimSpasDetails);
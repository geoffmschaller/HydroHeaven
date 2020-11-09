import React, {createRef, useState, useEffect} from 'react';
import styles from './SpasHotTubsDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import SpaData from "../../../data/SpaData";
import DeliveryDate from "../../../inflatables/DeliveryDate/DeliveryDate";
import CabinetData from "../../../data/CabinetData";
import HollowButton from '../../../inflatables/Buttons/HollowButton';
import {AMERICAN_WHIRLPOOL} from '../../../data/BrandsData';
import SpaGridItem from '../../../inflatables/SpaGridItem/SpaGridItem';
import FinancingBar from "../../../inflatables/FinancingBar/FinancingBar";
import {connect} from 'react-redux';
import SendPageView from '../../../api/analyticsAPICalls';

const AMERICAN_WHIRLPOOL_BROCHURE = require('../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf');
const VITA_SPAS_BROCHURE = require('../../../static/pdfs/brochures/VitaSpasBrochure.pdf');

const  SpasHotTubsDetails = props => {

	const [currentSpa, setCurrentSpa] = useState(SpaData[0]);
	const [cabinetLabel, setCabinetLabel] = useState('');
	const [acrylicLabel, setAcrylicLabel] = useState('');

	const scrollRef = createRef();

	const getSpaData = async (newId) => {
		setCurrentSpa(SpaData.filter((spa) => spa.id === newId)[0]);
		SendPageView(props.session, '/spa/' + currentSpa.name);
		window.scrollTo(0, scrollRef.current.offsetTop - 50)
	}

	const setCabinetColor = (name) => {
		setCabinetLabel(name);
	};

	const setAcrylicColor = (name) => {
		setAcrylicLabel(name);
	};

	const alsoViewed = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	useEffect(() => {
		getSpaData(props.match.url.replace("/spas-hot-tubs/view/", ""));
	}, []);

	return (
		<div className={styles.spasHotTubsDetails}>
			<div ref={scrollRef}/>
			<div className={styles.imageHolder}>
				<img src={currentSpa.image} alt=""/>
			</div>
			<DarkSlantTitle title={currentSpa.brand + " - " + currentSpa.name}/>
			<div className={styles.spaData}>
				<div className={styles.dataHolder}>
					<div className={styles.availability}>
						<DeliveryDate stocked={currentSpa.stocked}/>
					</div>
					<div className={styles.description}>{currentSpa.description}</div>
					<div className={styles.stats}>
						<div className={styles.stat}>{currentSpa.seats} Seats</div>
						<div className={styles.stat}>{currentSpa.gallons} Gallons</div>
						<div className={styles.stat}>{currentSpa.jets} Jets</div>
						<div className={styles.stat}>{currentSpa.length}" x {currentSpa.width}" x {currentSpa.height}"</div>
					</div>
					<div className={styles.colors}>
						<div className={styles.acrylic} onMouseLeave={() => setAcrylicColor("")}>
							<div className={styles.colorTitle}>Acrylic Choices: {acrylicLabel}</div>
							<div className={styles.itemHolder}>
								{
									currentSpa.acrylic.map((acr, index) => {
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
							<HollowButton title={currentSpa.name + " Spec Sheet"} width={50} link={currentSpa.pdf}
											color={'dark'}/>
							{
								currentSpa.brand === AMERICAN_WHIRLPOOL
									? <HollowButton title={"American Whirlpool Brochure"} width={50} link={AMERICAN_WHIRLPOOL_BROCHURE.default}
													color={'dark'}/>
									: <HollowButton title={"Vita Spas Brochure"} width={50} link={VITA_SPAS_BROCHURE.default} color={'dark'}/>
							}
						</div>
					</div>
				</div>
				<FinancingBar/>
			</div>
			<div className={styles.alsoViewed}>
				<DarkSlantTitle title={"Customers Also Viewed"}/>
				<div className={styles.gridHolder}>
					{
						alsoViewed.map((spa, index) => {
							return <SpaGridItem spa={spa} key={index} click={() => getSpaData(spa.id)}/>
						})
					}
				</div>
			</div>
		</div>
	);

}

let mapStateToProps = (state) => {
	return {
		session: state.session
	};
}


export default connect(mapStateToProps)(SpasHotTubsDetails);
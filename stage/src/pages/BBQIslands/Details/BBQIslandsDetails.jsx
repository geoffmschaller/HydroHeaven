import React, {createRef, useState, useEffect} from 'react';
import styles from './BBQIslandsDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import TileData from "../../../data/TileData";
import StuccoData from "../../../data/StuccoData";
import HollowButton from '../../../inflatables/Buttons/HollowButton';
import BBQData from '../../../data/BBQData';
import BBQGridItem from '../../../inflatables/BBQGridItem/BBQGridItem';
import SendPageView from '../../../api/analyticsAPICalls';
import {connect} from 'react-redux';

const BBQIslandsDetails = props => {

	const [currentBBQ, setBBQ] = useState(BBQData[0]);
	const [stuccoLabel, setStuccoLabel] = useState('');
	const [tileLabel, setTileLabel] = useState('');

	const scrollRef = createRef();

	const getBBQData = async (id) => {
		setBBQ(BBQData.filter((bbq) => bbq.id === id)[0]);
		SendPageView(props.session, '/bbq/' + currentBBQ.name);
		window.scrollTo(0, scrollRef.current.offsetTop - 50);
	}

	const setStuccoColor = (name) => {
		setStuccoLabel(name);
	};

	const setTileColor = (name) => {
		setTileLabel(name);
	};

	const alsoViewed = [BBQData[0], BBQData[1], BBQData[2], BBQData[3]];

	useEffect(() => {
		getBBQData(props.match.url.replace("/bbqs-islands/view/", ""));
	}, []);

	return (
		<div className={styles.bbqIslandsDetails}>
			<div ref={scrollRef}/>
			<DarkSlantTitle title={currentBBQ.brand + " - " + currentBBQ.name}/>
			<div className={styles.bbqData}>
				<div className={styles.imageHolder}>
					<img src={currentBBQ.image} alt=""/>
					<div className={styles.disclaimer}>* Island pictured above may be shown with additional upgrades. Please review Spec Sheet
						(standard features) before
						ordering.
					</div>
				</div>
				<div className={styles.dataHolder}>
					<div className={styles.description}>{currentBBQ.description}</div>
					<div className={styles.colors}>
						<div className={styles.tile} onMouseLeave={() => setTileColor("")}>
							<div className={styles.colorTitle}>Counter Tile Choices: {tileLabel}</div>
							<div className={styles.itemHolder}>
								{
									TileData.map((tile, index) => {
										return <img className={styles.item} src={tile.image} key={index}
													onMouseEnter={() => setTileColor(tile.name)} alt=""/>
									})
								}
							</div>
						</div>
						<div className={styles.stucco} onMouseLeave={() => setStuccoColor("")}>
							<div className={styles.colorTitle}>Stucco Choices: {stuccoLabel}</div>
							<div className={styles.itemHolder}>
								{
									StuccoData.map((stuc, index) => {
										return <img className={styles.item} src={stuc.image} key={index}
													onMouseEnter={() => setStuccoColor(stuc.name)} alt=""/>
									})
								}
							</div>
						</div>
					</div>
					<div className={styles.docs}>
						<div className={styles.docTitle}>Spa Documents</div>
						<div className={styles.docHolder}>
							<HollowButton title={currentBBQ.name + " Spec Sheet"} width={50} link={currentBBQ.pdf} external
											color={'dark'}/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.alsoViewed}>
				<DarkSlantTitle title={"Customers Also Viewed"}/>
				<div className={styles.gridHolder}>
					{
						alsoViewed.map((bbq, index) => {
							return <BBQGridItem bbq={bbq} key={index} click={() => getBBQData(bbq.id)}/>
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


export default connect(mapStateToProps)(BBQIslandsDetails);

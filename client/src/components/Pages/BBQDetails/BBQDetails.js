import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import BBQ_HEADER_IMAGE from "../../../static/images/headers/bull_bbq_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import {BBQData} from "../../../data/BBQData";
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import {getBrandFromId, getNameFromId} from "../../../utils/StringHelpers";
import styles from './BBQDetails.module.css';
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import {TileData} from "../../../data/TileData";
import {StuccoData} from "../../../data/StuccoData";
import ProductGrid from "../../Inflatables/ProductGrid/ProductGrid";

class BBQDetails extends React.Component {

	constructor(props) {
		super(props);
		this.scrollRef = React.createRef();
	}

	state = {
		selectedBBQ: null
	};

	componentDidMount() {
		this.getSelectedBBQ(this.props.match.url.replace("/bbq-islands/", ""));
	}

	getSelectedBBQ = (id) => {
		let bbq = BBQData.filter(b => {
			return b.id === id;
		});
		if (bbq.length > 0) {
			this.setState({selectedBBQ: bbq[0]});
			window.scrollTo(0, this.scrollRef.current.offsetTop);
		} else {
			this.props.history.push("/bbq-islands");
		}
	};


	render() {
		return (
			<>
				<MainHeader media={BBQ_HEADER_IMAGE} type={IMAGE_FILE}/>
				<div className="widthRestriction">
					<div ref={this.scrollRef}/>
					<VerticalSpacer height={50}/>
					{
						this.state.selectedBBQ ?
							<div>
								<Block float={FLOAT_LEFT} width={30}>
									<div className={styles.bbqImage}>
										<img src={this.state.selectedBBQ.image} alt=""/>
										<p>Island pictured above may be shown with additional upgrades. Please review Spec Sheet (standard features) before
											ordering.</p>
									</div>
								</Block>
								<Block float={FLOAT_RIGHT} width={70}>
									<SectionTitle title={"BBQ Island Details"}/>
									<div className={styles.bbqDetails}>
										<div className={styles.name}>{getNameFromId(this.state.selectedBBQ.id)}</div>
										<div className={styles.brand}>By {getBrandFromId(this.state.selectedBBQ.id)}</div>
										<p>{this.state.selectedBBQ.description}</p>
										<div className={styles.iconBar}>
											<div className={styles.item}>
												<i className="fad fa-fire"/>
												<div className={styles.label}>x 4 Burners</div>
											</div>
											<div className={styles.item}>
												<i className="fad fa-fire-alt"/>
												<div className={styles.label}>75,000 BTUs</div>
											</div>
											<div className={styles.item}>
												<i className="fad fa-temperature-frigid"/>
												<div className={styles.label}>Stainless Steel Refrigerator</div>
											</div>
											<div className={styles.item}>
												<i className="fal fa-bolt"/>
												<div className={styles.label}>GFCI electric outlet</div>
											</div>
										</div>
										<VerticalSpacer height={25}/>
										<a href={this.state.selectedBBQ.pdf}>
											<button>View Island Spec Sheet</button>
										</a>
										<div className="clear"/>
									</div>
								</Block>
								<div className="clear"/>
								<VerticalSpacer height={50}/>
								<div className={styles.bbqOptions}>
									<SectionTitle title={"Tile Options"}/>
									{
										TileData.map((tile, index) => {
											return <div className={styles.option} key={index}>
												<img src={tile.image} alt=""/>
												<div className={styles.label}>{tile.name}</div>
											</div>
										})
									}
								</div>
								<VerticalSpacer height={50}/>
								<div className={styles.bbqOptions}>
									<SectionTitle title={"Stucco Options"}/>
									{
										StuccoData.map((stucco, index) => {
											return <div className={styles.option} key={index}>
												<img src={stucco.image} alt=""/>
												<div className={styles.label}>{stucco.name}</div>
											</div>
										})
									}
								</div>
								<VerticalSpacer height={50}/>
								<SectionTitle title={"People Also Viewed"}/>
								<div className={styles.alsoViewed}>
									<ProductGrid productData={BBQData} link={"/bbq-islands/"} count={4} click={(id) => this.getSelectedBBQ(id)}/>
								</div>
							</div> : null
					}
				</div>
				<div className="clear"/>
			</>
		);
	}

}

export default BBQDetails;
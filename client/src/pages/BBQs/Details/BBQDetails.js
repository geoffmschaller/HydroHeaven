import React from 'react';
import VerticalSpacer from "../../../inflatables/VerticalSpacer/VerticalSpacer";
import {BBQData} from "../../../data/BBQData";
import Block from "../../../inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import styles from './BBQDetails.module.sass';
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import {TileData} from "../../../data/TileData";
import {StuccoData} from "../../../data/StuccoData";
import ProductGrid from "../../../inflatables/ProductGrid/ProductGrid";

class BBQDetails extends React.Component {

	state = {
		selectedBBQ: BBQData[0]
	};

	componentDidMount() {
		this.getSelectedBBQ(this.props.match.url.replace("/bbq-islands/", ""));
		window.scrollTo(0, 0);
	}

	getSelectedBBQ = (id) => {
		let bbq = BBQData.filter(b => b.id === id)[0];
		if (!bbq) {
			this.props.history.push("/bbq-islands");
		}
		this.setState({selectedBBQ: bbq});
		window.scrollTo(0, 0);
	};


	render() {
		return (
			<>
				<div className="widthRestriction">
					<div ref={this.scrollRef}/>
					<VerticalSpacer height={50}/>
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
								<div className={styles.name}>{this.state.selectedBBQ.name}</div>
								<div className={styles.brand}>By {this.state.selectedBBQ.brand}</div>
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
					</div>
				</div>
				<div className="clear"/>
			</>
		);
	}

}

export default BBQDetails;
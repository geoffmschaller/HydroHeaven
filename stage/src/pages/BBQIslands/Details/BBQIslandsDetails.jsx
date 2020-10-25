import React, {createRef} from 'react';
import styles from './BBQIslandsDetails.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import {TileData} from "../../../data/TileData";
import {StuccoData} from "../../../data/StuccoData";
import DarkHollowButton from '../../../inflatables/HollowButton/DarkHollowButton';
import {BBQData} from '../../../data/BBQData';
import BBQGridItem from '../../../inflatables/BBQGridItem/BBQGridItem';
import SendPageView from '../../../api/analyticsAPICalls';
import { connect } from 'react-redux';

class BBQIslandsDetails extends React.Component {

	state = {
		bbq: BBQData[0],
		stuccoLabel: "",
		tileLabel: ""
	};

	scrollRef = createRef();

	componentDidMount() {
		let id = this.props.match.url.replace("/bbqs-islands/view/", "");
		this.getBBQData(id);
	}

	getBBQData = async (id) => {
		let s = {...this.state};
		s.bbq = BBQData.filter((bbq) => bbq.id === id)[0];
		SendPageView(this.props.session, '/bbq/' + s.bbq.name);
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50);
		await this.setState(s);
	}

	setStuccoColor = (name) => {
		this.setState({stuccoLabel: name})
	};

	setTileColor = (name) => {
		this.setState({tileLabel: name})
	};

	alsoViewed = [BBQData[0], BBQData[1], BBQData[2], BBQData[3]];

	render() {
		return (
			<div className={styles.bbqIslandsDetails}>
				<div ref={this.scrollRef}/>
				<DarkSlantTitle title={this.state.bbq.brand + " - " + this.state.bbq.name}/>
				<div className={styles.bbqData}>
					<div className={styles.imageHolder}>
						<img src={this.state.bbq.image} alt=""/>
						<div className={styles.disclaimer}>* Island pictured above may be shown with additional upgrades. Please review Spec Sheet (standard features) before
							ordering.
						</div>
					</div>
					<div className={styles.dataHolder}>
						<div className={styles.description}>{this.state.bbq.description}</div>
						<div className={styles.colors}>
							<div className={styles.tile} onMouseLeave={() => this.setTileColor("")}>
								<div className={styles.colorTitle}>Counter Tile Choices: {this.state.tileLabel}</div>
								<div className={styles.itemHolder}>
									{
										TileData.map((tile, index) => {
											return <img className={styles.item} src={tile.image} key={index}
											            onMouseEnter={() => this.setTileColor(tile.name)} alt=""/>
										})
									}
								</div>
							</div>
							<div className={styles.stucco} onMouseLeave={() => this.setStuccoColor("")}>
								<div className={styles.colorTitle}>Stucco Choices: {this.state.stuccoLabel}</div>
								<div className={styles.itemHolder}>
									{
										StuccoData.map((stuc, index) => {
											return <img className={styles.item} src={stuc.image} key={index}
											            onMouseEnter={() => this.setStuccoColor(stuc.name)} alt=""/>
										})
									}
								</div>
							</div>
						</div>
						<div className={styles.docs}>
							<div className={styles.docTitle}>Spa Documents</div>
							<div className={styles.docHolder}>
								<DarkHollowButton title={this.state.bbq.name + " Spec Sheet"} width={50} link={this.state.bbq.pdf} external/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.alsoViewed}>
					<DarkSlantTitle title={"Customers Also Viewed"}/>
					<div className={styles.gridHolder}>
						{
							this.alsoViewed.map((bbq, index) => {
								return <BBQGridItem bbq={bbq} key={index} click={() => this.getBBQData(bbq.id)}/>
							})
						}
					</div>
				</div>
			</div>
		);
	}

}

let mapStateToProps = (state) => {
	return {
		session: state.session
	};
}


export default connect(mapStateToProps)(BBQIslandsDetails);

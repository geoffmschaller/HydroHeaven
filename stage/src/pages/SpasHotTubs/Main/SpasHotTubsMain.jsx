import React, {createRef} from "react";
import styles from './SpasHotTubsMain.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import HollowButton from "../../../inflatables/Buttons/HollowButton";
import WhiteSlantTitle from "../../../inflatables/SlantTitle/WhiteSlantTitle";
import BrochureData from '../../../data/BrochureData';
import SpaFeaturesData from '../../../data/SpaFeaturesData';


class SpasHotTubsMain extends React.Component {

	componentDidMount() {
		window.scrollTo(0, this.scrollRef.current.offsetTop - 50);
	}

	scrollRef = createRef();

	shopBy = [
		{
			title: "View Stocked Spas",
			link: "/spas-hot-tubs/grid/stocked"
		},
		{
			title: "View By Price",
			link: "/spas-hot-tubs/grid/price"
		},
		{
			title: "View By Size",
			link: "/spas-hot-tubs/grid/size"
		},
		{
			title: "View By Seating",
			link: "/spas-hot-tubs/grid/seating"
		}
	];


	render() {
		return (
			<div className={styles.spasHotTubsMain}>
				<div ref={this.scrollRef}/>
				{/* HOW TO SHOP */}
				<div className={styles.howToShop}>
					<WhiteSlantTitle title={"How do you like to spa shop?"}/>
					<div className={styles.buttonBar}>
						{
							this.shopBy.map((shop, index) => {
								return <HollowButton title={shop.title} link={shop.link} key={index} width={25} external={false} color={"white"}/>
							})
						}
					</div>
				</div>

				{/* FEATURES AND DOCUMENTS */}
				<div className={styles.featuresDocuments}>
					<DarkSlantTitle title={"Spa Features & Documents"}/>
					<div className={styles.featuresDocumentsHolder}>

						{/* FEATURES */}
						<div className={styles.features}>
							{
								SpaFeaturesData.map((feat, index) => {
									return <div className={styles.feature} key={index}>
										<img src={feat.image} alt=""/>
										<div className={styles.name}>{feat.name}</div>
										<div className={styles.description}>{feat.description}</div>
									</div>
								})
							}
						</div>

						{/* DOCUMENTS */}
						<div className={styles.documents}>

							{/* BROCHURES */}
							<div className={styles.brochures}>
								{
									BrochureData.map((broc, index) => {
										return <HollowButton title={broc.name} link={broc.link} key={index} width={50} external color={'white'}/>
									})
								}
							</div>

							{/* LEISURE SUPPLY */}
							<div className={styles.leisure}>
								<div className={styles.ltImage}>
									<img src={require('../../../static/images/maintenance/leisure-time-products.png')} alt=""/>
								</div>
								<div className={styles.description}>
									For more than 25 years, Leisure Time® has been the premier name in spa water care. The Leisure Time® brand
									continually
									improves its product line, program and packaging that elegantly wraps up years of innovation. Plus, Leisure Time®
									spa offers
									its Simple Spa Care® program, an easy-to-follow spa care routine that allows spa owners to spend more time in
									their spas and
									less time maintaining them.
								</div>
							</div>

						</div>

					</div>
				</div>


			</div>
		);
	}


}

export default SpasHotTubsMain;
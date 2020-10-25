import React, {createRef} from "react";
import styles from './SpasHotTubsMain.module.sass';
import DarkSlantTitle from "../../../inflatables/SlantTitle/DarkSlantTitle";
import DarkHollowButton from "../../../inflatables/HollowButton/DarkHollowButton";
import WhiteSlantTitle from "../../../inflatables/SlantTitle/WhiteSlantTitle";
import WhiteHollowButton from "../../../inflatables/HollowButton/WhiteHollowButton";

import F1 from '../../../static/images/features/lights.jpg';
import F2 from '../../../static/images/features/insulation.jpg';
import F3 from '../../../static/images/features/massage.jpg';
import F4 from '../../../static/images/features/ozonator.jpg';

import B1 from '../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf';
import B2 from '../../../static/pdfs/brochures/VitaSpasBrochure.pdf';

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

	features = [
		{
			name: "LED Light System",
			description: "Once only available as an option, this feature is now a standard feature on most 700 and 500 Series spas. A true laminar stream of" +
				" water rises above the water’s surface providing a soothing visual and sound effect.",
			image: F1
		},
		{
			name: "Northern Exposure Insulation",
			description: "Northern Exposure® is the ultimate hot tub insulation system. This unique thermal barrier technology recycles the free heat energy for more efficient heating and lower energy costs. All four sides of the spa, plus the floor and cover are lined with reflective copper material to reflect radiant heat energy generated from the pumps back into the spa. Heat is absorbed back into the plumbing helping raise and maintain water temperature. Finally the entire exterior of the hot tub is wrapped in 3M™ Thinsulate™ Insulation, the same incredible material utilized in winter clothing. This three layer patented system ensures energy created by the spa, stays in the spa.",
			image: F2
		},
		{
			name: "Complete Massage",
			description: "A Vita Spa is designed to deliver a complete massage just like you would receive at a massage clinic. Vita Spa incorporates a variety of massage systems into its unique designs to deliver effective, therapeutic relief. Experience the natural healing power of hydrotherapy and choose between our many jetting arrays – each utilizing specific massage techniques to satisfy your needs. Your Vita Spa utilizes different types of jets in specific configurations throughout the spa to deliver the treatments described in the menu buttons to your right.",
			image: F3
		},
		{
			name: "Cleanzone Ozonator",
			description: "The CleanZone™ Ozone System is a cartridge oxidizer that is used to oxidize and clean your spa water. This water purification system will automatically maintain healthy, crystal clear water while reducing chemical maintenance.",
			image: F4
		}
	];

	brochures = [
		{
			name: "American Whirlpool Brochure",
			link: B1
		},
		{
			name: "Vita Spas Brochure",
			link: B2
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
								return <WhiteHollowButton title={shop.title} link={shop.link} key={index} width={25} external={false}/>
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
								this.features.map((feat, index) => {
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
									this.brochures.map((broc, index) => {
										return <DarkHollowButton title={broc.name} link={broc.link} key={index} width={50} external/>
									})
								}
							</div>

							{/* LEISURE SUPPLY */}
							<div className={styles.leisure}>
								<div className={styles.ltImage}>
									<img src={require('../../../static/images/maintenance/leisure-time-products.png')} alt=""/>
								</div>
								<div className={styles.description}>
									For more than 25 years, Leisure Time® has been the premier name in spa water care. The Leisure Time® brand continually
									improves its product line, program and packaging that elegantly wraps up years of innovation. Plus, Leisure Time® spa offers
									its Simple Spa Care® program, an easy-to-follow spa care routine that allows spa owners to spend more time in their spas and
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

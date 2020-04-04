import React from 'react';
import styles from './SpasMain.module.sass';
import SectionTitle from "../../../inflatables/SectionTitle/SectionTitle";
import MASSAGE_IMAGE from '../../../static/images/features/massage.jpg';
import LIGHT_IMAGE from '../../../static/images/features/lights.jpg';
import INSULATION_IMAGE from '../../../static/images/features/insulation.jpg';
import OZONATOR_IMAGE from '../../../static/images/features/ozonator.jpg';
import LEISURE_TIME_IMAGE from '../../../static/images/maintenance/leisure-time-products.png';
import AMERICAN_WHIRLPOOL_BROCHURE from '../../../static/pdfs/brochures/AmericanWhirlpoolBrochure.pdf';
import VITA_SPAS_BROCHRUE from '../../../static/pdfs/brochures/VitaSpasBrochure.pdf';
import {Link} from "react-router-dom";

class SpasMain extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	features = [
		{
			name: "Complete Massage",
			description: "A Vita Spa is designed to deliver a complete massage just like you would receive at a massage clinic. Vita Spa incorporates a" +
				" variety of massage systems into its unique designs to deliver effective, therapeutic relief. Experience the natural healing power of hydrotherapy and choose between our many jetting arrays – each utilizing specific massage techniques to satisfy your needs. Your Vita Spa utilizes different types of jets in specific configurations throughout the spa to deliver the treatments described in the menu buttons to your right.",
			image: MASSAGE_IMAGE
		},
		{
			name: "LED Light System",
			description: "Once only available as an option, this feature is now a standard feature on most 700 and 500 Series spas. A true laminar stream of" +
				" water rises above the water’s surface providing a soothing visual and sound effect.",
			image: LIGHT_IMAGE
		},
		{
			name: "Northern Exposure Insulation System",
			description: "Northern Exposure® is the ultimate hot tub insulation system.  This unique thermal barrier technology recycles the free heat" +
				" energy for more efficient heating and lower energy costs.  All four sides of the spa, plus the floor and cover are lined with reflective copper material to reflect radiant heat energy generated from the pumps back into the spa.  Heat is absorbed back into the plumbing helping raise and maintain water temperature.  Finally the entire exterior of the hot tub is wrapped in 3M™ Thinsulate™ Insulation, the same incredible material utilized in winter clothing.  This three layer patented system ensures energy created by the spa, stays in the spa.",
			image: INSULATION_IMAGE
		},
		{
			name: "Cleanzone Ozonator",
			description: "The CleanZone™ Ozone System is a cartridge oxidizer that is used to oxidize and clean your spa water. This water purification" +
				" system will automatically maintain healthy, crystal clear water while reducing chemical maintenance.",
			image: OZONATOR_IMAGE
		}
	];

	options = [
		{
			name: "Price",
			link: "price"
		},
		{
			name: "Size",
			link: "size"
		},
		{
			name: "Seating",
			link: "seating"
		},
		{
			name: "Stocked",
			link: "stocked"
		}
	];

	render() {
		return (
			<div className={styles.spasMain}>
				<div className={styles.howToShop}>
					<SectionTitle title={"How do you like to shop?"}/>
					<div className={styles.options}>
						{
							this.options.map((op, index) => {
								return <Link to={"/spas-hot-tubs/grid/" + op.link} key={index}>
									<div className={styles.item}>
										<div className={styles.text}>{op.name}</div>
									</div>
								</Link>
							})
						}
					</div>
				</div>
				<div className={styles.featuresDocs}>
					<div className={styles.features}>
						{
							this.features.map((feat, index) => {
								return <div className={styles.item} key={index}>
									<img src={feat.image} alt=""/>
									<div className={styles.title}>{feat.name}</div>
									<div className={styles.description}>{feat.description}</div>
								</div>
							})
						}
					</div>
					<div className={styles.docs}>
						<div className={styles.brochures}>
							<SectionTitle title={"Brochures"}/>
							<div className={styles.items}>
								<a href={AMERICAN_WHIRLPOOL_BROCHURE}>
									<button>American Whirlpool Brochure</button>
								</a>
								<a href={VITA_SPAS_BROCHRUE}>
									<button>Vita Spas Brochure</button>
								</a>
							</div>
						</div>
						<div className={styles.maintenance}>
							<SectionTitle title={"Spa Maintenance"}/>
							<div className={styles.imageHolder}>
								<img src={LEISURE_TIME_IMAGE} alt=""/>
							</div>
							<p>For more than 25 years, Leisure Time® has been the premier name in spa water care. The Leisure Time® brand continually improves
								its product line, program and packaging that elegantly wraps up years of innovation. Plus, Leisure Time® spa offers its Simple
								Spa Care® program, an easy-to-follow spa care routine that allows spa owners to spend more time in their spas and less time
								maintaining them.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default SpasMain;
import React from 'react';
import styles from './FeaturedCategory.module.css';
import HOT_TUB_IMAGE from '../../../static/images/categories/hot_tub_spas.jpg';
import SWIM_SPAS_IMAGE from '../../../static/images/categories/swim_spas.jpg';
import BBQ_ISLANDS_IMAGE from '../../../static/images/categories/bbq_islands.jpg';
import {Link} from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import VerticalSpacer from "../VerticalSpacer/VerticalSpacer";
import COMMERCIAL_VIDEO from "../../../static/video/hh_commercial.mp4";

const FeaturedCategory = (props) => {

	return (
		<div className={styles.featured}>

			<div className="widthRestriction">
				<SectionTitle title={"View By Category"} darkMode={true}/>
				<VerticalSpacer height={20}/>
				<div className={styles.category}>
					<img src={HOT_TUB_IMAGE} alt=""/>
					<div className={styles.title}>Hot Tubs & Spas</div>
					<p>We searched the country and found the spa brands that provide the highest product quality, affordable pricing, and highest customer
						satisfaction.</p>
					<Link to={"/spas-hot-tubs"}>
						<button>View Hot Tubs</button>
					</Link>
					<div className="clear"/>
				</div>
				<div className={styles.category}>
					<img src={SWIM_SPAS_IMAGE} alt=""/>
					<div className={styles.title}>Swim Spas</div>
					<p>Spas aren't just for relaxing anymore. Get your work out in with one of American Whirlpools award winning swim spas.</p>
					<Link to={"/swim-spas"}>
						<button>View Swim Spas</button>
					</Link>
					<div className="clear"/>
				</div>
				<div className={styles.category}>
					<img src={BBQ_ISLANDS_IMAGE} alt=""/>
					<div className={styles.title}>BBQ Islands</div>
					<p>With its superior products, facilities, and team, Bull Outdoor Products Inc. pioneered the concept of outdoor barbecue islands.</p>
					<Link to={"/bbq-islands"}>
						<button>View BBQ Islands</button>
					</Link>
					<div className="clear"/>
				</div>
				<div className="clear"/>
				<VerticalSpacer height={75}/>
				<SectionTitle title={"Our Sales & Specials"} darkMode={true}/>
				<video src={COMMERCIAL_VIDEO} autoPlay={false} muted={false} controls={true}/>
			</div>

			<div className="clear"/>
		</div>
	);

};

export default FeaturedCategory;
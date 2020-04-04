import React from 'react';
import SectionTitle from "../../inflatables/SectionTitle/SectionTitle";
import VerticalSpacer from "../../inflatables/VerticalSpacer/VerticalSpacer";
import Block from "../../inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../utils/FloatTypes";
import StoreLocations from "../../inflatables/StoreLocations/StoreLocations";
import {SpaData} from "../../data/SpaData";
import styles from './Home.module.sass';
import HOT_TUB_IMAGE from "../../static/images/categories/hot_tub_spas.jpg";
import {Link} from "react-router-dom";
import SWIM_SPAS_IMAGE from "../../static/images/categories/swim_spas.jpg";
import BBQ_ISLANDS_IMAGE from "../../static/images/categories/bbq_islands.jpg";
import SpaGridItem from "../../inflatables/SpaGridItem/SpaGridItem";

export default class Home extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	categories = [
		{
			name: "Spas & Hot Tubs",
			image: HOT_TUB_IMAGE,
			description: "We searched the country and found the spa brands that provide the highest product quality, affordable pricing, and highest" +
				" customer satisfaction.",
			link: "/spas-hot-tubs"
		},
		{
			name: "Swim Spas",
			image: SWIM_SPAS_IMAGE,
			description: "Spas aren't just for relaxing anymore. Get your work out in with one of American Whirlpools award winning swim spas.",
			link: "/swim-spas"
		},
		{
			name: "BBQs & Islands",
			image: BBQ_ISLANDS_IMAGE,
			description: "With its superior products, facilities, and team, Bull Outdoor Products Inc. pioneered the concept of outdoor barbecue islands.",
			link: "/bbq-islands"
		}
	];

	services = [
		{
			name: "Your Central Coast Experts",
			description: "We are excited to continue and serve the central coast a high quality product and service we stand behind."
		},
		{
			name: "Your Chemical Resource",
			description: "From Chlorine to Test Strips: we stock everything you need to maintain your spa and keep it up and running!"
		},
		{
			name: "In House Technician",
			description: "Our full time technician handles the complete range of warranty, maintenance, and repair work. No third party hassle!"
		}
	];

	featuredSpas = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	render() {
		return (
			<div>
				<div className={styles.featured}>
					<div className="widthRestriction">
						<SectionTitle title="View By Category" darkMode/>
						<VerticalSpacer height={20}/>
						{
							this.categories.map((cat, index) => {
								return <div className={styles.category} key={index}>
									<img src={cat.image} alt=""/>
									<div className={styles.title}>{cat.name}</div>
									<p>{cat.description}</p>
									<Link to={cat.link}>
										<button type="button">View {cat.name}</button>
									</Link>
									<div className="clear"/>
								</div>
							})
						}
						<div className="clear"/>
					</div>
					<div className="clear"/>
				</div>
				<div className={styles.essentialService}>
					<div className={styles.attention}>Attention</div>
					<p>The San Luis Obispo County Health Department has listed Hydro Heaven as an <span className={styles.bold}>Essential Business </span>
						because of our sale of chlorine and
						other water sanitizers. As a result we have been asked to remain open during the shelter in place
						order.</p>
					<p>We promise to maintain <span className={styles.bold}>Clean Workspace Routines</span> in our stores as well as practice social
						distancing at
						six feet. We can also handle Will Call chemical purchases over the phone. </p>
					<p><span className={styles.bold}>Our Chemical Maintenance Service will remain on schedule</span> as we must continue to sanitize
						water, in
						accordance to public health standards.</p>
					<p><span className={styles.bold}>Until further notice the new store hours are as follows: M-F 9:30A - 4P, Sat 10A - 3P.</span></p>
					<div className={styles.thankYou}>- Thank you, from the Hydro Heaven team.</div>
				</div>
				<div className="widthRestriction">
					<VerticalSpacer height={100}/>
					<SectionTitle title={"Featured Spas & Hot Tubs"} darkMode={false}/>
					<div className={styles.featuredSpas}>

						{
							this.featuredSpas.map((spa, index) => <SpaGridItem spa={spa} key={index}/>)
						}
					</div>
					<VerticalSpacer height={100}/>
					<Block float={FLOAT_LEFT} width={40}>
						<SectionTitle title={"Locations"} darkMode={false}/>
						<StoreLocations/>
					</Block>
					<Block float={FLOAT_RIGHT} width={60}>
						<SectionTitle title={"Our Services"} darkMode={false}/>
						<div className={styles.services}>
							{
								this.services.map((serv, index) => {
									return <div className={styles.service} key={index}>
										<div className={styles.title}>{serv.name}.</div>
										<div className={styles.holder}>
											<div className={styles.description}>{serv.description}</div>
										</div>
										<div className="clear"/>
									</div>
								})
							}
						</div>
					</Block>
				</div>
				<div className="clear"/>
			</div>
		);
	}

}
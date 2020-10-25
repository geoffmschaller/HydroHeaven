import React from 'react';
import styles from './Home.module.sass';
import {Link} from "react-router-dom";
import WhiteSlantTitle from "../../inflatables/SlantTitle/WhiteSlantTitle";
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import {SpaData} from '../../data/SpaData';
import SpaGridItem from "../../inflatables/SpaGridItem/SpaGridItem";
import { connect } from 'react-redux';
import SendPageView from '../../api/analyticsAPICalls';

import Featured1 from '../../static/images/categories/hot_tub_spas.jpg';
import Featured2 from '../../static/images/categories/swim_spas.jpg';
import Featured3 from '../../static/images/categories/bbq_islands.jpg';

import Loc1 from '../../static/images/locations/arroyo_grande.jpg';
import Loc2 from '../../static/images/locations/san_luis_obispo.jpg';

import Serv1 from '../../static/images/services/experts.jpg';
import Serv2 from '../../static/images/services/chemicals.jpg';
import Serv3 from '../../static/images/services/service.jpg';

import Aw1 from '../../static/images/awards/2019.jpg';
import Aw2 from '../../static/images/awards/2018.jpg';
import Aw3 from '../../static/images/awards/2017.jpg';

class Home extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
		SendPageView(this.props.session, "/");
	}

	featuredCategories = [
		{
			name: "Spas & Hot Tubs",
			description: "We searched the country and found the spa brands that provide the highest product quality, affordable pricing, and highest" +
				" customer satisfaction.",
			image: Featured1,
			link: "/spas-hot-tubs"
		},
		{
			name: "Swim Spas",
			description: "Spas aren't just for relaxing anymore. Get your work out in with one of American Whirlpools award winning swim spas.",
			image: Featured2,
			link: "/swim-spas"
		},
		{
			name: "BBQs & Islands",
			description: "With its superior products, facilities, and team, Bull Outdoor Products Inc. pioneered the concept of outdoor barbecue islands.",
			image: Featured3,
			link: "/bbqs-islands"
		}
	];

	featuredSpas = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	locations = [
		{
			address: "135 Traffic Way, Arroyo Grande CA",
			image: Loc1,
			phone: "(805) 473 - 2205"
		},
		{
			address: "200 Higuera Street, San Luis Obispo, CA",
			image: Loc2,
			phone: "(805) 544 - 1772"
		}
	];

	services = [
		{
			name: "Your central coast experts",
			description: "Hydro Heaven has been serving the central coast for over 30 years. We would like to offer you our service and expertise whether you are upgrading an old spa or are a first time buyer.",
			image: Serv1
		},
		{
			name: "Your one stop chemical resource",
			description: "Both our Arroyo Grande and San Luis Obispo location stock a full range of sanitizers, clarifyers and chemical maintenance treatments to keep your spa up and running. Stop in any time to for your complete spa maintenance kit featuring brands: Leisure Time, Brilliance and Baqua Spa.",
			image: Serv2
		},
		{
			name: "In house technician",
			description: "Does your spa need a tune up? We've got you covered. Hydro Heaven employs a full time service team whose expericence can have you back in your hot tub in no time. Give us a call and we will schedule a service call ASAP.",
			image: Serv3
		}
	];

	awards = [
		{
			image: Aw1
		},
		{
			image: Aw2
		},
		{
			image: Aw3
		}
	];

	render() {
		return (
			<div className={styles.home}>

				{/* FEATURED CATEGORIES */}
				<div className={styles.featuredCategory}>
					<WhiteSlantTitle title={"View By Category"}/>
					<div className={styles.itemHolder}>
						{
							this.featuredCategories.map((feat, index) => {
								return <div className={styles.item} key={index}>
									<img src={feat.image} alt=""/>
									<div className={styles.title}>{feat.name}</div>
									<div className={styles.description}>{feat.description}</div>
									<Link to={feat.link}>
										<button>View More {feat.name}</button>
									</Link>
								</div>
							})
						}
					</div>
				</div>

				{/* FEATURED SPAS */}
				<div className={styles.featuredSpas}>
					<DarkSlantTitle title={"Featured Spas"}/>
					<div className={styles.itemList}>
						{
							this.featuredSpas.map((spa, index) => {
								return <SpaGridItem spa={spa} key={index} click={() => {
								}}/>
							})
						}
					</div>
				</div>

				{/* AWARDS */}
				<div className={styles.awards}>
					<DarkSlantTitle title={"Awards"}/>
					<div className={styles.awardsHolder}>
						{
							this.awards.map((aw, index) => {
								return <img src={aw.image} alt="" key={index}/>
							})
						}
					</div>
				</div>

				{/* LOCATIONS AND SERVICES */}
				<div className={styles.locationsServices}>
					<DarkSlantTitle title={"Services & Locations"}/>
					<div className={styles.locationsServicesHolder}>
						<div className={styles.services}>
							{
								this.services.map((serv, index) => {
									return <div className={styles.service} key={index}>
										<div className={styles.imageHolder}>
											<img src={serv.image} alt=""/>
											<div className={styles.title}>{serv.name}</div>
										</div>
										<div className={styles.description}>{serv.description}</div>
									</div>
								})
							}
						</div>
						<div className={styles.locations}>
							{
								this.locations.map((loc, index) => {
									return <div className={styles.location} key={index}>
										<img src={loc.image} alt=""/>
										<div className={styles.address}>{loc.address}</div>
										<div className={styles.phone}>{loc.phone}</div>
									</div>
								})
							}
						</div>
					</div>
				</div>

			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		session: state.session
	};
}


export default connect(mapStateToProps)(Home);
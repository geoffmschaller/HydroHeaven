import React from 'react';
import styles from './Home.module.sass';
import {Link} from "react-router-dom";
import WhiteSlantTitle from "../../inflatables/SlantTitle/WhiteSlantTitle";
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import SpaGridItem from "../../inflatables/SpaGridItem/SpaGridItem";

import SpaData from '../../data/SpaData';
import FeaturedCategoriesData from '../../data/FeaturedCategoriesData';
import LocationData from '../../data/LocationData';
import ServicesData from '../../data/ServicesData';
import AwardsData from '../../data/AwardsData';

class Home extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0);
	}


	featuredSpas = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	render() {
		return (
			<div className={styles.home}>

				{/* FEATURED CATEGORIES */}
				<div className={styles.featuredCategory}>
					<WhiteSlantTitle title={"View By Category"}/>
					<div className={styles.itemHolder}>
						{
							FeaturedCategoriesData.map((feat, index) => {
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
							AwardsData.map((aw, index) => {
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
								ServicesData.map((serv, index) => {
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
								LocationData.map((loc, index) => {
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


export default Home;
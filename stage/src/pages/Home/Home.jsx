import React, {useEffect} from 'react';
import styles from './Home.module.sass';
import WhiteSlantTitle from "../../inflatables/SlantTitle/WhiteSlantTitle";
import DarkSlantTitle from "../../inflatables/SlantTitle/DarkSlantTitle";
import SpaGridItem from "../../inflatables/SpaGridItem/SpaGridItem";
import Button from '../../inflatables/Buttons/Button';

import SpaData from '../../data/SpaData';
import FeaturedCategoriesData from '../../data/FeaturedCategoriesData';
import LocationData from '../../data/LocationData';
import ServicesData from '../../data/ServicesData';
import AwardsData from '../../data/AwardsData';

const Home = props => {

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const featuredSpas = [SpaData[0], SpaData[1], SpaData[2], SpaData[3]];

	return (
		<div className={styles.home}>
			<div className={styles.featuredCategory}>
				<WhiteSlantTitle title={"View By Category"}/>
				<div className={styles.itemHolder}>
					{
						FeaturedCategoriesData.map((feat, index) => {
							return <div className={styles.item} key={index}>
								<img src={feat.image} alt=""/>
								<div className={styles.title}>{feat.name}</div>
								<div className={styles.description}>{feat.description}</div>
								<Button title="View More" color="#58d68d" link={feat.link} hollow="true"/>
							</div>
						})
					}
				</div>
			</div>
			<div className={styles.featuredSpas}>
				<DarkSlantTitle title={"Featured Spas"}/>
				<div className={styles.itemList}>
					{
						featuredSpas.map((spa, index) => {
							return <SpaGridItem spa={spa} key={index} click={() => {
							}}/>
						})
					}
				</div>
			</div>
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


export default Home;
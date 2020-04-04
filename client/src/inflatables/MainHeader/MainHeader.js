import React from 'react';
import styles from './MainHeader.module.sass';
import HEADER_VIDEO from '../../static/video/spa_jets.mp4';
import {Link} from "react-router-dom";

class MainHeader extends React.Component {

	render() {
		return (
			<div id={styles.mainHeader}>
				<div className={styles.videoHolder}>
					<video src={HEADER_VIDEO} loop autoPlay/>
					<div id={styles.videoOverlay}>
						<div id={styles.title}>Ultimate In:</div>
						<div id={styles.largeTitle}>Relaxation <br/> & Hydro Therapy</div>
						<div id={styles.buttonBar}>
							{
								/*
								<button className={"btn-purple"}><i className="far fa-play"/> View Video</button>
								 */
							}
							<Link to={"/spas-hot-tubs/"}>
								<button className={"btn-white-transparant"}>Get Started</button>
							</Link>
							<Link to={"/spas-hot-tubs/grid/any"}>
								<button className={"btn-white-transparant"}>View More</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainHeader;
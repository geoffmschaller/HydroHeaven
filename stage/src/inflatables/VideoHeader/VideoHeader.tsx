import React from 'react';
import styles from './VideoHeader.module.sass';
import { Link } from 'react-router-dom';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VIDEO_HEADER = require('../../static/video/spa_jets.mp4');
const VITA_SPAS_VIDEO = require('../../static/video/maxx.mp4');

class VideoHeader extends React.Component {

	state = {
		open: false
	}

	setVideoPlayer = async (mode: boolean) => {
		await this.setState({open: mode});
	}

	render(){
		return (
			<div className={styles.videoHeader}>
				{
					this.state.open
						? <VideoPlayer open={this.state.open} video={VITA_SPAS_VIDEO} close={this.setVideoPlayer}/>
						: null
				}
				<div className={styles.videoHolder}>
					<video src={VIDEO_HEADER} autoPlay loop/>
					<div className={styles.overlay}>
						<div className={styles.title}>Ultimate In</div>
						<div className={styles.main}>Massage <br/> & Hydro Therapy</div>
						<div className={styles.buttonBar}>
							<button className={styles.purple} onClick={() => this.setVideoPlayer(true)}><i className="fas fa-play"/> Watch Video</button>
							<Link to={"/spas-hot-tubs"}>
								<button className={styles.white}>Get Started</button>
							</Link>
							<Link to={"/spas-hot-tubs/grid/price"}>
								<button className={styles.white}>View More</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default VideoHeader;
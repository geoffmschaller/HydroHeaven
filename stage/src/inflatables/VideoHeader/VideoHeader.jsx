import React, {useState} from 'react';
import styles from './VideoHeader.module.sass';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VIDEO_HEADER from '../../static/video/spa_jets.mp4';
import VITA_SPAS_VIDEO from '../../static/video/maxx.mp4';
import Button from '../Buttons/Button';

const VideoHeader = props => {

	const [videoPlayer, setVideoPlayer] = useState(false);

	const changeVideoPlayer = (mode) => {
		setVideoPlayer(mode);
	}

	return (
		<div className={styles.videoHeader}>
			{
				videoPlayer
					? <VideoPlayer open={videoPlayer} video={VITA_SPAS_VIDEO} close={changeVideoPlayer}/>
					: null
			}
			<div className={styles.videoHolder}>
				<video src={VIDEO_HEADER} autoPlay loop/>
				<div className={styles.overlay}>
					<div className={styles.title}>Ultimate In</div>
					<div className={styles.main}>Massage <br/> & Hydro Therapy</div>
					<div className={styles.buttonBar}>
						<Button title='Watch Video' link='' color='#c39bd3' onClick={() => changeVideoPlayer(true)}/>
						<Button title='Get Started' link='/spas-hot-tubs' color='white' hollow="true"/>
						<Button title='View More...' link='/spas-hot-tubs/grid/price' color='white' hollow={"true"}/>
					</div>
				</div>
			</div>
		</div>
	);

}

export default VideoHeader;
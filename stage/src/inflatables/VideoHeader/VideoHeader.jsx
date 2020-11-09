import React, {useState} from 'react';
import styles from './VideoHeader.module.sass';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import HollowButton from '../Buttons/HollowButton';
import SolidButton from '../Buttons/SolidButton';
import VIDEO_HEADER from '../../static/video/spa_jets.mp4';
import VITA_SPAS_VIDEO from '../../static/video/maxx.mp4';

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
						<SolidButton color={'#f7dc6f'} width={30} title={'Watch Video'} link={""}
										onClick={() => changeVideoPlayer(false)}/>
						<HollowButton width={30} link={'/spas-hot-tubs'} color={'white'} title={'Get Started'}/>
						<HollowButton width={30} link={'/spas-hot-tubs/grid/price'} color={'white'} title={'View More...'}/>
					</div>
				</div>
			</div>
		</div>
	);

}

export default VideoHeader;
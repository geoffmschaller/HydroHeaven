import React, {useState, useEffect} from 'react';
import styles from './VideoPlayer.module.sass';

const VideoPlayer = props => {

	const [screenOffset, setScreenOffset] = useState(0);

	useEffect(() => {
		setScreenOffset(window.scrollY);
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		}
	}, []);

    return(
		<div className={styles.videoPlayer} style={{top: `${screenOffset}px`}}>
			<div className={styles.videoHolder}>
				<div className={styles.close} onClick={() => props.close(false)}><i className="fas fa-times"/></div>
				<video src={props.video} autoPlay loop controls/>
			</div>
		</div>
	);

}

export default VideoPlayer;
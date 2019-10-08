import React from 'react';
import PropTypes from 'prop-types';
import {IMAGE_FILE, VIDEO_FILE} from "../../../utils/MediaTypes";
import styles from './MainHeader.module.css';
import MAIN_LOGO from '../../../static/images/main_logo_desktop_shaddow.png';
import {Link} from "react-router-dom";

const MainHeader = (props) => {

	return (
		<div className={styles.mainHeader}>
			{
				props.type === VIDEO_FILE ?
					<video className={styles.video} src={props.media} autoPlay={true} loop={true}/> :
					<img className={styles.image} src={props.media} alt=""/>
			}
			<div className={styles.mediaOverlay}>
				<div className={styles.contentShifter}>
					<img src={MAIN_LOGO} alt=""/>
					<p>Hydro Heaven is your best choice for Hot tub and Spa care. We have proudly served the central coast for decades and gladly offer our
						expertise to you.</p>
					<Link to={"/spas-hot-tubs"}>
						<button>Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);

};

MainHeader.propTypes = {
	type: PropTypes.oneOf([VIDEO_FILE, IMAGE_FILE]).isRequired,
	media: PropTypes.string.isRequired
};

export default MainHeader;
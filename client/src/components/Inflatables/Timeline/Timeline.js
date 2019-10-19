import React from 'react';
import styles from './Timeline.module.css';
import Post from "./Post";

const Timeline = (props) => {

	return (
		<div className={styles.timeline}>
			<div className={styles.newPost}>
				<div className={styles.sectionTitle}>New Post</div>
				<textarea placeholder={"What would you like to say?"}/>
				<div className={styles.menu}>
					<i className="fad fa-images"/>
					<i className={styles.send + " fad fa-share"}/>
				</div>
			</div>
			<div className={styles.posts}>
				<Post/>
				<Post/>
				<Post/>
			</div>
		</div>
	);

};

export default Timeline;
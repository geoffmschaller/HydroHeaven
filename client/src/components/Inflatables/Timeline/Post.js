import React from 'react';
import styles from './Timeline.module.css';

const Post = (props) => {

	let images = ["https://www.fillmurray.com/400/300", "https://www.fillmurray.com/400/300", "https://www.fillmurray.com/400/300", "https://www.fillmurray.com/400/300"];

	let imageBlock;
	if (images.length === 1) {
		imageBlock = <div className={styles.imageBlock}>
			<img className={styles.fullImage} src={images[0]} alt=""/>
			<div className="clear"/>
		</div>
	}
	if (images.length === 2) {
		imageBlock = <div className={styles.imageBlock}>
			<img className={styles.halfImage} src={images[0]} alt=""/>
			<img className={styles.halfImage} src={images[1]} alt=""/>
			<div className="clear"/>
		</div>
	}
	if (images.length > 2) {
		imageBlock = <div className={styles.imageBlock}>
			<div className={styles.halfImage} style={{backgroundImage: 'url(' + images[1] + ')'}}/>
			<div className={styles.stackGrid}>
				<div className={styles.stackedImage} style={{backgroundImage: 'url(' + images[1] + ')'}}/>
				<div className={styles.stackedImage} style={{backgroundImage: 'url(' + images[2] + ')'}}/>
			</div>
			<div className="clear"/>
		</div>
	}

	return (
		<div className={styles.post}>
			{imageBlock}
			<div className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae consequuntur facere hic mollitia nemo
				placeat possimus quos, repudiandae sapiente similique ut vero! Eligendi molestias, necessitatibus nihil numquam voluptates voluptatum.
			</div>
			<div className={styles.author}>Geoff Schaller 10/17/19 @ 10:36AM</div>
			<div className={styles.likes}>
				<div className={styles.like}>
					<div className={styles.icon}><i className="fad fa-thumbs-down"/></div>
					<div className={styles.num}> x 1</div>
					<div className="clear"/>
				</div>
				<div className={styles.like}>
					<div className={styles.icon}><i className="fad fa-thumbs-up"/></div>
					<div className={styles.num}> x 3</div>
					<div className="clear"/>
				</div>
				<div className="clear"/>
			</div>
			<div className="clear"/>
		</div>
	);
};

export default Post;
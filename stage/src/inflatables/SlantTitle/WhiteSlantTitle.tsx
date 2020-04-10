import React from 'react';
import styles from './SlantTitle.module.sass';

interface SlantTitleProps {
	title: string
}

const WhiteSlantTitle = (props: SlantTitleProps) => {

	return (
		<div className={styles.slantTitle}>
			<div className={styles.whiteBorder}/>
			<div className={styles.whiteSlantTitle}>
				<div className={styles.text}>{props.title}</div>
			</div>
		</div>
	);

};

export default WhiteSlantTitle;
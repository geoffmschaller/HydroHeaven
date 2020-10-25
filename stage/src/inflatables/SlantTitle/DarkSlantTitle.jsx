import React from 'react';
import styles from './SlantTitle.module.sass';

const DarkSlantTitle = (props) => {

	return (
		<div className={styles.slantTitle}>
			<div className={styles.darkBorder}/>
			<div className={styles.darkSlantTitle}>
				<div className={styles.text}>{props.title}</div>
			</div>
		</div>
	);

};

export default DarkSlantTitle;
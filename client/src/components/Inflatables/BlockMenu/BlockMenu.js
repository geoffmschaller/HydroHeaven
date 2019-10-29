import React from 'react';
import styles from './BlockMenu.module.css';
import PropTypes from 'prop-types';

const BlockMenu = (props) => {
	return(
		<div className={styles.blockMenu}>
			<div className={[styles.block, styles.blockRed].join(" ")}>
				<div className={styles.blockTop}>{props.data[0].num}</div>
				<div className={styles.blockLabel}>{props.data[0].label}</div>
				<div className={styles.blockBottom}></div>
			</div>
			<div className={[styles.block, styles.blockBlue].join(" ")}>
				<div className={styles.blockTop}>{props.data[1].num}</div>
				<div className={styles.blockLabel}>{props.data[1].label}</div>
				<div className={styles.blockBottom}></div>
			</div>
			<div className={[styles.block, styles.blockGreen].join(" ")}>
				<div className={styles.blockTop}>{props.data[2].num}</div>
				<div className={styles.blockLabel}>{props.data[2].label}</div>
				<div className={styles.blockBottom}></div>
			</div>
			<div className={[styles.block, styles.blockOrange].join(" ")}>
				<div className={styles.blockTop}>{props.data[3].num}</div>
				<div className={styles.blockLabel}>{props.data[3].label}</div>
				<div className={styles.blockBottom}></div>
			</div>
			<div className="clear"/>
		</div>
	);
}

export default BlockMenu;
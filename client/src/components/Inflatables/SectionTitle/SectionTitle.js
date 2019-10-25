import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

const SectionTitle = (props) => (
	<div className={styles.sectionTitle}>
		{
			props.darkMode
				? (
					<>
						<div className={[styles.title, styles.title_dark].join(' ')}>{props.title}</div>
						<div className={[styles.border, styles.border_dark].join(' ')} />
					</>
				)
				: (
					<>
						<div className={styles.title}>{props.title}</div>
						<div className={styles.border} />
					</>
				)
		}

	</div>
);

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	darkMode: PropTypes.bool.isRequired,
};

export default SectionTitle;

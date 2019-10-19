import React from 'react';
import styles from './SubTitle.module.css';
import PropTypes from 'prop-types';

const SubTitle = (props) => {

	return (
		<div className={styles.subtitle}>{props.title}</div>
	);

};

SubTitle.propTypes = {
	title: PropTypes.string.isRequired
};

export default SubTitle;
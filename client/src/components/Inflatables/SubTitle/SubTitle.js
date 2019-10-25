import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubTitle.module.css';

const SubTitle = (props) => (
	<div className={styles.subtitle}>{props.title}</div>
);

SubTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default SubTitle;

import React from 'react';
import PropTypes from 'prop-types';

const VerticalSpacer = (props) => (
	<div style={{ width: `${100}%`, height: `${props.height}px`, clear: 'both' }} />
);

VerticalSpacer.propTypes = {
	height: PropTypes.number.isRequired,
};

export default VerticalSpacer;

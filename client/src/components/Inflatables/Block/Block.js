import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Block.module.css';
import { FLOAT_LEFT, FLOAT_RIGHT } from '../../../utils/FloatTypes';

class Block extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: 0,
		};

		this.calculateWidth = () => {
			this.setState({ windowWidth: window.innerWidth });
		};
	}

	componentDidMount() {
		this.calculateWidth();
		window.addEventListener('resize', this.calculateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.calculateWidth);
	}

	render() {
		const width = this.state.windowWidth >= 400 ? `${this.props.width}%` : '100%';
		return (
			<div className={styles.block} style={{ float: this.props.float, width }}>{this.props.children}</div>
		);
	}
}

Block.propTypes = {
	float: PropTypes.oneOf([FLOAT_LEFT, FLOAT_RIGHT]).isRequired,
	width: PropTypes.number.isRequired,
};

export default Block;

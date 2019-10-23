import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends React.Component {

	render() {

		let modalClass = this.props.mode ? [styles.modal, styles.open].join(" ") : styles.modal;

		return (
			<div className={modalClass}>
				<div className={styles.frame}>
					<div className={styles.closeBar} onClick={() => this.props.close(false)}><i className="fas fa-times"/></div>
					<div className={styles.title}>{this.props.title}</div>
					<div className="breaker"/>
					{
						this.props.children
					}
					<div className="breaker"/>
					<button className={styles.submit} onClick={() => this.props.submit()}><i className="fas fa-check"/></button>
					<button className={styles.close} onClick={() => this.props.close(false)}><i className="fas fa-times"/></button>
					<div className="clear"/>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	submit: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
	mode: PropTypes.bool.isRequired
};

export default Modal;
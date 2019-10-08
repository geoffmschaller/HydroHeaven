import React from 'react';
import styles from "./Form.module.css";
import PropTypes from 'prop-types';
import {LINE_INPUT, MULTI_LINE_INPUT} from "../../../utils/InputTypes";

class Input extends React.Component {

	state = {
		open: false
	};

	checkLabel = (event, force = false) => {
		if (force) {
			this.setState({open: true})
		} else {
			let inp = event.target;
			if (inp.value === "") {
				this.setState({open: false})
			}
		}
	};

	render() {

		let labelClasses = this.state.open ? [styles.label, styles.open].join(" ") : styles.label;

		return (
			<div className={styles.input}>
				<label htmlFor="" className={labelClasses}>{this.props.inputData.name}:</label>

				{
					this.props.inputData.type === LINE_INPUT ?
						<input type="text"
						       onFocus={(event) => this.checkLabel(event, true)}
						       onBlur={(event) => this.checkLabel(event)}
						       onChange={this.props.change}
						       value={this.props.val}
						/> :
						<textarea onFocus={(event) => this.checkLabel(event, true)}
						          onBlur={(event) => this.checkLabel(event)}
						          onChange={this.props.change}
						          value={this.props.val}
						/>
				}

			</div>
		);
	}
}

Input.propTypes = {
	inputData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf([LINE_INPUT, MULTI_LINE_INPUT]).isRequired,
		required: PropTypes.bool.isRequired,
		value: PropTypes.string.isRequired
	}).isRequired,
	change: PropTypes.func.isRequired,
	val: PropTypes.string.isRequired
};

export default Input;
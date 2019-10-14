import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import {FORM_READY, FORM_SUBMITTING, FORM_SUCCESS} from "../../../utils/FormModes";
import {ERROR, NONE, SUCCESS} from "../../../data/ActionResults";
import {LINE_INPUT, MULTI_LINE_INPUT, PASSWORD_INPUT} from "../../../utils/InputTypes";

class Form extends React.Component {

	render() {
		return (
			<div className={styles.form}>
				{
					this.props.inputs ? this.props.inputs.map((inp, index) => {

						if (inp.type === LINE_INPUT) {
							return <input type="text"
							              key={index}
							              placeholder={inp.name}
							              onChange={(event) => this.props.updateValue(event, index)}
							              value={inp.value}
							/>
						}
						if (inp.type === PASSWORD_INPUT) {
							return <input type="password"
							              key={index}
							              placeholder={inp.name}
							              onChange={(event) => this.props.updateValue(event, index)}
							              value={inp.value}
							/>
						}
						if (inp.type === MULTI_LINE_INPUT) {
							return <textarea placeholder={inp.name}
							                 key={index}
							                 onChange={(event) => this.props.updateValue(event, index)}
							                 value={inp.value}
							/>
						}
					}) : null
				}
				{
					this.props.mode === FORM_READY ?
						<button onClick={() => this.props.submit()}>Submit</button> : null
				}
				{
					this.props.mode === FORM_SUBMITTING ?
						<button><i className="fad fa-spinner-third"/></button> : null
				}
				<div className="clear"/>
				<div className={styles.errorMessage}>
					{
						this.props.messages && this.props.messages.status === ERROR ? <p>{this.props.messages.message}</p> : null
					}
				</div>
				<div className={styles.successMessage}>
					{
						this.props.messages && this.props.messages.status === SUCCESS ? <p>{this.props.messages.message}</p> : null
					}
				</div>
			</div>
		);
	}
}


Form.propTypes = {
	inputs: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		required: PropTypes.bool.isRequired,
		value: PropTypes.string.isRequired
	})).isRequired,
	messages: PropTypes.shape({
		status: PropTypes.oneOf([SUCCESS, ERROR, NONE]).isRequired,
		message: PropTypes.string.isRequired
	}).isRequired,
	mode: PropTypes.oneOf([FORM_READY, FORM_SUBMITTING, FORM_SUCCESS]).isRequired,
	updateValue: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired
};

export default Form;
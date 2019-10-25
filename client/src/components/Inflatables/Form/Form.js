import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { FORM_READY, FORM_SUBMITTING, FORM_SUCCESS } from '../../../utils/FormModes';
import { ERROR, NONE, SUCCESS } from '../../../data/ActionResults';
import { LINE_INPUT, PASSWORD_INPUT } from '../../../utils/InputTypes';

const Form = (props) => (
	<div className={styles.form}>
		{
			props.inputs ? props.inputs.map((inp, index) => {
				if (inp.type === LINE_INPUT) {
					return <input type="text" key={index} placeholder={inp.name} onChange={(event) => props.updateValue(event, index)} value={inp.value} />;
				}
				if (inp.type === PASSWORD_INPUT) {
					return <input type="password" key={index} placeholder={inp.name} onChange={(event) => props.updateValue(event, index)} value={inp.value} />;
				}
				return <textarea placeholder={inp.name} key={index} onChange={(event) => props.updateValue(event, index)} value={inp.value} />;
			}) : null
		}
		{
			props.mode === FORM_READY
				? <button type="button" onClick={() => props.submit()}>Submit</button> : null
		}
		{
			props.mode === FORM_SUBMITTING
				? <button type="button"><i className="fad fa-spinner-third" /></button> : null
		}
		<div className="clear" />
		<div className={styles.errorMessage}>
			{
				props.messages && props.messages.status === ERROR ? <p>{props.messages.message}</p> : null
			}
		</div>
		<div className={styles.successMessage}>
			{
				props.messages && props.messages.status === SUCCESS ? <p>{props.messages.message}</p> : null
			}
		</div>
	</div>
);


Form.propTypes = {
	inputs: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		required: PropTypes.bool.isRequired,
		value: PropTypes.string.isRequired,
	})).isRequired,
	messages: PropTypes.shape({
		status: PropTypes.oneOf([SUCCESS, ERROR, NONE]).isRequired,
		message: PropTypes.string.isRequired,
	}).isRequired,
	mode: PropTypes.oneOf([FORM_READY, FORM_SUBMITTING, FORM_SUCCESS]).isRequired,
	updateValue: PropTypes.func.isRequired,
	submit: PropTypes.func.isRequired,
};

export default Form;

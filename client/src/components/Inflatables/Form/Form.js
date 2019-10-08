import React from 'react';
import styles from './Form.module.css';
import Input from "./Input";
import PropTypes from 'prop-types';
import {FORM_READY, FORM_SUBMITTING, FORM_SUCCESS} from "../../../utils/FormModes";
import Axios from "axios";

class Form extends React.Component {

	state = {
		form: this.props.formData,
		errorMessage: ""
	};

	submitForm = () => {
		let s = this.state;
		s.form.mode = FORM_SUBMITTING;
		this.setState(s);
		Axios.post(this.state.form.url, {
			name: this.state.form.inputs[0].value,
			email: this.state.form.inputs[1].value,
			message: this.state.form.inputs[2].value
		}).then(result => {
			if (result.data.status === 500) {
				s.form.mode = FORM_READY;
				s.errorMessage = result.data.message;
				this.setState(s);
			} else {
				s.form.mode = FORM_SUCCESS;
				s.errorMessage = "";
				for (let i = 0; i < s.form.inputs.length; i++) {
					s.form.inputs[i].value = "";
				}
				this.setState(s);
			}
		}).catch(err => {
			s.errorMessage = "Network Error. Please try again";
			s.form.mode = FORM_READY;
			this.setState(s);
		});
	};

	updateValue = (event, index) => {
		let s = {...this.state};
		s.form.inputs[index].value = event.target.value;
		this.setState(s);
	};

	render() {


		return (
			<div className={styles.form}>
				{
					this.state.form.inputs.map((inp, index) => {
						return <Input inputData={inp} key={index} change={(event) => this.updateValue(event, index)} val={this.state.form.inputs[index].value}/>
					})
				}
				{
					this.state.form.mode === FORM_READY ?
						<button onClick={() => this.submitForm()}>Submit</button> : null
				}
				{
					this.state.form.mode === FORM_SUBMITTING ?
						<button><i className="fad fa-spinner-third"/></button> : null
				}
				{
					this.state.form.mode === FORM_SUCCESS ?
						<p className={styles.successButton}>Thank you! We have received your message!</p> : null
				}
				<div className="clear"/>
				<p className={styles.errorMessage}>
					{
						this.state.errorMessage !== "" ? this.state.errorMessage : null
					}
				</p>
			</div>
		);
	}
}


Form.propTypes = {
	formData: PropTypes.shape({
		mode: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		inputs: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			required: PropTypes.bool.isRequired,
			value: PropTypes.string.isRequired
		})).isRequired
	})
};

export default Form;
import React from 'react';
import styles from './Login.module.css';
import {FORM_READY, FORM_SUBMITTING} from "../../../utils/FormModes";
import {ERROR, NONE, SUCCESS} from "../../../data/ActionResults";
import {LINE_INPUT, PASSWORD_INPUT} from "../../../utils/InputTypes";
import Form from "../../Inflatables/Form/Form";
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import BannerImage from '../../../static/images/headers/spa_display_header.png';
import {LoginAttempt} from "../../../api/auth";

class Login extends React.Component {

	state = {
		form: {
			mode: FORM_READY,
			messages: {
				status: NONE,
				message: ""
			},
			inputs: [
				{
					name: "Email",
					type: LINE_INPUT,
					required: true,
					value: ""
				},
				{
					name: "Password",
					type: PASSWORD_INPUT,
					required: true,
					value: ""
				}
			]
		}
	};

	updateInputValue = async (event, index) => {
		let s = {...this.state};
		s.form.inputs[index].value = event.target.value;
		await this.setState(s);
	};

	handleSubmit = async () => {
		await this.updateFormMode(FORM_SUBMITTING);
		let result = await LoginAttempt(this.state.form.inputs[0].value, this.state.form.inputs[1].value);
		if (result.status === 500) {
			await this.updateFormMode(FORM_READY);
			await this.updateFormMessage(ERROR, "Network Error. Please try again.");
			return;
		}
		if (result && result.data.status === 200) {
			await this.updateFormMode(FORM_READY);
			await this.updateFormMessage(SUCCESS, result.data.message);
			await this.resetInputValues();
			return;
		}
		await this.updateFormMode(FORM_READY);
		await this.updateFormMessage(ERROR, result.data.message);
	};

	resetInputValues = async () => {
		let s = {...this.state};
		for (let i = 0; i < this.state.form.inputs.length; i++) {
			s.form.inputs[i].value = "";
		}
		await this.setState(s);
	};

	updateFormMode = async (mode) => {
		let s = {...this.state};
		s.form.mode = mode;
		await this.setState(s);
	};

	updateFormMessage = async (status, message) => {
		let s = {...this.state};
		s.form.messages = {status: status, message: message};
		await this.setState(s);
	};

	render() {
		return (
			<div className={styles.login}>
				<Block float={FLOAT_LEFT} width={40}>
					<div className={styles.banner} style={{backgroundImage: `url(${BannerImage})`}}/>
				</Block>
				<Block float={FLOAT_RIGHT} width={60}>
					<div className={styles.form}>
						<div className={styles.title}>Login</div>
						<Form inputs={this.state.form.inputs} messages={this.state.form.messages}
						      mode={this.state.form.mode}
						      updateValue={this.updateInputValue} submit={this.handleSubmit}/>
					</div>
				</Block>
			</div>
		);
	}

}

export default Login;
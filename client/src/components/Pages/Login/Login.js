import React from "react";
import styles from './Login.module.css';
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import SpaBackground from "../../../static/images/headers/spa_display_header.png";
import MainLogo from "../../../static/images/main_logo_desktop_no_border.png";
import {LoginForm} from "../../../data/FormData";
import Form from "../../Inflatables/Form/Form";
import {ERROR, NONE, SUCCESS} from "../../../data/ActionResults";
import {FORM_READY, FORM_SUBMITTING} from "../../../utils/FormModes";
import Axios from "axios";

class Login extends React.Component {

	state = {
		form: null,
		mode: FORM_READY,
		messages: {
			status: NONE,
			message: ""
		}
	};

	componentWillMount() {
		let s = {...this.state};
		s.form = LoginForm;
		this.setState(s);
	}

	updateInputValue = (event, index) => {
		let s = {...this.state};
		s.form.inputs[index].value = event.target.value;
		this.setState(s);
	};

	handleSubmit = async () => {
		let s = {...this.state};
		s.mode = FORM_SUBMITTING;
		await this.setState(s);
		let result = await Axios.post(this.state.form.url, {values: this.state.form.inputs});
		if (result && result.data.status === 500) {
			let s = {...this.state};
			s.mode = FORM_READY;
			s.messages = {status: ERROR, message: result.data.message};
			await this.setState(s);
		} else if (result && result.data.status === 200) {
			let s = {...this.state};
			s.mode = FORM_READY;
			s.messages = {status: SUCCESS, message: result.data.message};
			for (let i = 0; i < this.state.form.inputs.length; i++) {
				s.form.inputs[i].value = "";
			}
			await this.setState(s);
			// OTHER SUCCESS FUNCTIONS
		} else {
			let s = {...this.state};
			s.mode = FORM_READY;
			s.messages = {status: ERROR, message: "Network Error. Please try again."};
			await this.setState(s);
		}
	};

	render() {
		let background = "url(" + SpaBackground + ")";
		return (
			<div className={styles.login}>
				<Block float={FLOAT_LEFT} width={50}>
					<div className={styles.leftBar} style={{backgroundImage: background}}/>
				</Block>
				<Block float={FLOAT_RIGHT} width={50}>
					<div className={styles.holder}>
						<img src={MainLogo} alt=""/>
						<div className={styles.title}>Login</div>
						<Form inputs={this.state.form.inputs} mode={this.state.mode} messages={this.state.messages} updateValue={this.updateInputValue}
						      submit={this.handleSubmit}/>
					</div>
				</Block>
				<div className="clear"/>
			</div>
		);
	}

}

export default Login;
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
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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

		// SET SUBMITTING SPINNER
		let s = {...this.state};
		s.mode = FORM_SUBMITTING;
		await this.setState(s);

		// MAKE CALL TO SERVER
		let result = await Axios.post(this.state.form.url, {values: this.state.form.inputs});

		// HANDLE ERROR
		if (result && result.data.status === 500) {
			s.mode = FORM_READY;
			s.messages = {status: ERROR, message: result.data.message};
			await this.setState(s);

			// ON SUCCESSFUL LOGIN
		} else if (result && result.data.status === 200) {
			s.mode = FORM_READY;
			s.messages = {status: SUCCESS, message: result.data.message};
			for (let i = 0; i < this.state.form.inputs.length; i++) {
				s.form.inputs[i].value = "";
			}
			await this.setState(s);

			// SET TOKEN, STORE AND REDIRECT
			localStorage.setItem("HH_Token", result.data.user.token);
			this.props.onSuccessfulLogin({email: result.data.user.email, id: result.data.user.id});
			this.props.history.push("/dashboard");

		} else {

			// THROW NETWORKING ERROR
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
						{
							this.props.auth.verified ?
								<Link to={"/dashboard"}>
									<button>Dashboard</button>
								</Link> : null
						}
					</div>
				</Block>
				<div className="clear"/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSuccessfulLogin: (data) => dispatch({type: 'LOGIN', data: data})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
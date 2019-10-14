import React from 'react';
import MainHeader from "../../Inflatables/MainHeader/MainHeader";
import WORK_BENCH_HEADER from "../../../static/images/headers/work_bench_display_header.png";
import {IMAGE_FILE} from "../../../utils/MediaTypes";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import SectionTitle from "../../Inflatables/SectionTitle/SectionTitle";
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import styles from './ServiceContact.module.css';
import Form from "../../Inflatables/Form/Form";
import {ServiceContactForm} from "../../../data/FormData";
import StoreLocations from "../../Inflatables/StoreLocations/StoreLocations";
import NavigationBar from "../../Inflatables/NavigationBar/NavigationBar";
import Footer from "../../Inflatables/Footer/Footer";
import {FORM_READY, FORM_SUBMITTING} from "../../../utils/FormModes";
import {ERROR, NONE, SUCCESS} from "../../../data/ActionResults";
import Axios from "axios";

class ServiceContact extends React.Component {

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
		s.form = ServiceContactForm;
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
		return (
			<>
				<NavigationBar/>
				<MainHeader media={WORK_BENCH_HEADER} type={IMAGE_FILE}/>
				<div className="widthRestriction">
					<VerticalSpacer height={100}/>
					<Block float={FLOAT_LEFT} width={40}>
						<div className={styles.serviceRestrictor}>
							<VerticalSpacer height={30}/>
							<StoreLocations/>
						</div>
					</Block>
					<Block float={FLOAT_RIGHT} width={60}>
						<SectionTitle title={"Service & Contact"}/>
						<p>Please feel free to send us a message below, we'd love to hear from you. If this is urgent please call one of our locations so that a
							team member can help you directly.</p>
						<VerticalSpacer height={20}/>
						<Form inputs={this.state.form.inputs} mode={this.state.mode} messages={this.state.messages} updateValue={this.updateInputValue}
						      submit={this.handleSubmit}/>
					</Block>
				</div>
				<div className="clear"/>
				<VerticalSpacer height={150}/>
				<Footer/>
			</>
		);
	}

}

export default ServiceContact;
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
import StoreLocations from "../../Inflatables/StoreLocations/StoreLocations";
import NavigationBar from "../../Inflatables/NavigationBar/NavigationBar";
import Footer from "../../Inflatables/Footer/Footer";
import {FORM_READY, FORM_SUBMITTING} from "../../../utils/FormModes";
import {ERROR, NONE, SUCCESS} from "../../../data/ActionResults";
import {SendContactForm} from "../../../api/contactAPICalls";
import {LINE_INPUT, MULTI_LINE_INPUT} from "../../../utils/InputTypes";

class ServiceContact extends React.Component {

	state = {
		form: {
			mode: FORM_READY,
			messages: {
				status: NONE,
				message: ""
			},
			inputs: [
				{
					name: "Name",
					type: LINE_INPUT,
					required: true,
					value: ""
				},
				{
					name: "Email",
					type: LINE_INPUT,
					required: true,
					value: ""
				},
				{
					name: "Message",
					type: MULTI_LINE_INPUT,
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
		let result = await SendContactForm(this.state.form.inputs);
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
						<p>Please feel free to send us a message below, we'd love to hear from you. If this is urgent
							please call one of our locations so that a
							team member can help you directly.</p>
						<VerticalSpacer height={20}/>
						<Form inputs={this.state.form.inputs} mode={this.state.form.mode}
						      messages={this.state.form.messages}
						      updateValue={this.updateInputValue}
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
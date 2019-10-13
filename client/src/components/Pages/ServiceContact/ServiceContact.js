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

const ServiceContact = (props) => {

	return (
		<>
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
					<Form formData={ServiceContactForm}/>
				</Block>
			</div>
			<div className="clear"/>
		</>
	);

};

export default ServiceContact;
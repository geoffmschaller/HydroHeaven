import React from 'react';
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import Block from "../../Inflatables/Block/Block";
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import Timeline from "../../Inflatables/Timeline/Timeline";
import ProfileBar from "../../Inflatables/ProfileBar/ProfileBar";

class Home extends React.Component {

	render() {
		return (
			<div>
				<DashboardTitle title={"Dashboard"}/>
				<VerticalSpacer height={20}/>
				<Block float={FLOAT_LEFT} width={25}>
					<ProfileBar/>
				</Block>
				<Block float={FLOAT_RIGHT} width={75}>
					<Timeline/>
				</Block>
				<div className="clear"/>
			</div>
		);
	}
}

export default Home;
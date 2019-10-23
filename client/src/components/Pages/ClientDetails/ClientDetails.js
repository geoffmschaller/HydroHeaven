import React from 'react';
import styles from './ClientDetails.module.css';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import SPA_IMAGE from '../../../static/images/spas/250.png';
import Block from "../../Inflatables/Block/Block";
import {FLOAT_LEFT, FLOAT_RIGHT} from "../../../utils/FloatTypes";
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import Axios from "axios";
import {transformToPhoneNumber} from "../../../utils/StringHelpers";
import Modal from "../../Inflatables/Modal/Modal";
import {connect} from "react-redux";
import MapBox from "../../Inflatables/MapBox/MapBox";

class ClientDetails extends React.Component {


	state = {
		client: null,
		updatedClient: null,
		errorMessage: "",
		successMessage: "",
		modal: false,
		lat: "",
		lng: ""
	};

	componentDidMount = async () => {
		let token = localStorage.getItem("HH_Token");
		if (!token) {
			// REDIRECT OUT
		}
		let result = await Axios.post("/api/clients/get-client-by-id", {
			id: this.props.match.params.id,
			token: token
		});
		if (result.data.status === 500) {
			// ERROR
		} else {
			let s = {...this.state};
			s.client = {...result.data.client};
			s.updatedClient = {...result.data.client};
			await this.setState(s);
			this.updateMap();
		}
	};

	updateValues = async (event) => {
		let s = {...this.state};
		s.updatedClient[event.target.name] = event.target.value;
		this.setState(s);
	};

	saveNewValues = async () => {
		let token = localStorage.getItem("HH_Token");
		if (!token) {
			// REDIRECT OUT
		}
		let s = {...this.state};
		s.errorMessage = "";
		s.successMessage = "";
		await this.setState(s);
		let result = await Axios.post("/api/clients/update-client-by-id", {
			client: this.state.updatedClient,
			token: token
		});
		if (result.status === 500) {
			s.errorMessage = "Network Error. Please try again.";
			await this.setState(s);
		}
		if (result.data.status === 500) {
			s.errorMessage = result.data.message;
			await this.setState(s);
		}
		if (result.data.status === 200) {
			s.errorMessage = result.data.message;
			s.client = {...this.state.updatedClient};
			await this.setState(s);
			this.setModal(false);
			this.updateMap();
			this.props.updateCurrentClient(this.state.updatedClient);
		}
	};

	updateMap = async () => {
		let s = {...this.state};
		if (s.client.address) {
			let res = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${s.client.address},+CA&key=AIzaSyAz89pEyVfEwOndrtDhoo9ubaR_agBv-1A`);
			let loc = res.data.results[0].geometry.location;
			if (!loc) {
				// NO MAP
			} else {
				s.lat = loc.lat;
				s.lng = loc.lng;
			}
		}
		this.setState(s);
	};

	setModal = (mode) => {
		let s = {...this.state};
		s.modal = mode;
		this.setState(s);
	};

	render() {

		return (
			<div className={styles.clientDetails}>
				{
					this.state.client ?
						<DashboardTitle
							title={this.state.client.lastName + ", " + this.state.client.firstName + " - " + transformToPhoneNumber(this.state.client.phone)}>
							<i className="fas fa-user-edit" onClick={() => this.setModal(true)}/>
						</DashboardTitle> : null
				}
				<VerticalSpacer height={20}/>
				<SubTitle title={"Client Location"}/>
				<VerticalSpacer height={10}/>
				{
					this.state.lat !== "" && this.state.lng !== "" ? <MapBox lat={this.state.lat} lng={this.state.lng}/> :
						<div className={styles.noMapData}>No Map Data Available.</div>
				}
				<VerticalSpacer height={20}/>
				{
					this.state.client ? <div className={styles.address}>{this.state.client.address}</div> : null
				}

				<div className={styles.breaker}/>
				<Block float={FLOAT_LEFT} width={30}>
				<div className={styles.cleaningRoute}>
						<SubTitle title={"Cleaning Route"}/>
						<VerticalSpacer height={30}/>
						<div className={styles.cleaningCenter}>
							<i class="far fa-shield-alt"/>
							<div className={styles.route}>San Luis Cleaning Route</div>
						</div>
					</div>
					<VerticalSpacer height={45}/>
					<SubTitle title={"Spa Information"}/>
					<div className={styles.spaDetails}>
						<img src={SPA_IMAGE} alt=""/>
						<div className={styles.scale}>
							<i className="fad fa-sausage"/> *Banana for scale.
						</div>
						<div className={styles.model}>2016 - #250</div>
						<div className={styles.make}>By American Whirlpool</div>
					</div>
					<div className="clear"/>
					
				</Block>
				<Block float={FLOAT_RIGHT} width={70}>
					<div className={styles.serviceHistory}>
						<SubTitle title={"Service History"}/>
						<table>
							<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Status</th>
								<th>View</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							</tbody>

						</table>
					</div>
					<VerticalSpacer height={50}/>
					<div className={styles.orderHistory}>
						<SubTitle title={"Order History"}/>
						<table>
							<thead>
							<tr>
								<th>Date</th>
								<th>Description</th>
								<th>Status</th>
								<th>View</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							<tr>
								<td>10/19/19</td>
								<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempore.</td>
								<td>PAID</td>
								<td><i className="fad fa-long-arrow-right"/></td>
							</tr>
							</tbody>
						</table>
					</div>
				</Block>
				<div className="clear"/>
				<Modal submit={this.saveNewValues} close={this.setModal} mode={this.state.modal}
				       title={"Edit Client"}>
					{
						this.state.client ? <>
							<input type="text"
							       onChange={(event) => this.updateValues(event)}
							       name={"firstName"}
							       placeholder={"First Name"}
							       value={this.state.updatedClient.firstName}
							/>
							<input type="text"
							       onChange={(event) => this.updateValues(event)}
							       name={"lastName"}
							       placeholder={"Last Name"}
							       value={this.state.updatedClient.lastName}
							/>
							<input type="text"
							       onChange={(event) => this.updateValues(event)}
							       name={"phone"}
							       placeholder={"Phone"}
							       value={this.state.updatedClient.phone}
							/>
							<input type="text"
							       onChange={(event) => this.updateValues(event)}
							       name={"email"}
							       placeholder={"Email"}
							       value={this.state.updatedClient.email}
							/>
							<input type="text"
							       onChange={(event) => this.updateValues(event)}
							       name={"address"}
							       placeholder={"Address"}
							       value={this.state.updatedClient.address}
							/>
						</> : null
					}
					<p className={styles.error}>{this.state.errorMessage}</p>
					<p className={styles.success}>{this.state.successMessage}</p>
				</Modal>
			</div>
		);
	}

}

const mapDispatchToProps = dispatch => {
	return {
		updateCurrentClient: (data) => dispatch({type: 'UPDATE_CLIENT', data: data})
	}
};

export default connect(null, mapDispatchToProps)(ClientDetails);
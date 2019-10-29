import React from 'react';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import styles from './Clients.module.css';
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import {Link} from "react-router-dom";
import Axios from "axios";
import {connect} from "react-redux";
import Modal from "../../Inflatables/Modal/Modal";
import {transformToPhoneNumber} from "../../../utils/StringHelpers";
import BlockMenu from '../../Inflatables/BlockMenu/BlockMenu';

class Clients extends React.Component {

	state = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: "",
		errorMessage: "",
		modal: false
	};

	updateValues = (event) => {
		let s = {...this.state};
		s[event.target.name] = event.target.value;
		this.setState(s);
	};

	addNewClient = async () => {

		let s = {...this.state};
		s.errorMessage = "";
		await this.setState(s);

		let token = localStorage.getItem("HH_Token");
		if (!token) {
			// REDIRECT OUT
			console.log("NO AUTH TOKEN")
		}
		let result = await Axios.post("/api/clients/add-new-client", {
			client: {firstName: s.firstName, lastName: s.lastName, phone: s.phone, email: s.email, address: s.address},
			token: token
		});
		if (result.status !== 200) {
			s.errorMessage = "Network Error. Please try again.";
			await this.setState(s);
		}
		console.log(result);
		if (result.data.status !== 200) {
			s.errorMessage = result.data.message;
			await this.setState(s);
		}
		if (result.data.status === 200) {
			s.modal = false;
			this.props.onSuccessfulNewClient(result.data.client);
			s.firstName = "";
			s.lastName = "";
			s.phone = "";
			s.address = "";
			s.email = "";
			await this.setState(s);
		}

	};

	setModal = (mode) => {
		let s = {...this.state};
		s.modal = mode;
		this.setState(s);
	};


	render() {

		let blockData = [
			{num: this.props.clients.length, label: "Total Clients"},
			{num: this.props.clients.length, label: "Clients This Week"},
			{num: this.props.clients.length, label: "Clients This Month"},
			{num: this.props.clients.length, label: "Clients This Year"}
		]

		return (
			<div className={styles.clients}>
				<DashboardTitle title={"Client List"}>
					<i className="fad fa-user-plus" onClick={() => this.setModal(true)}/>
				</DashboardTitle>
				<VerticalSpacer height={20}/>
				<BlockMenu data={blockData}/>
				<div className={"breaker"}/>
				<VerticalSpacer height={20}/>
				<SubTitle title={"Live Search"}/>
				<div className={styles.liveSearch}>
					<input type="text" placeholder={"Begin Typing To Search..."}/>
					<div className={styles.searchName}>Searching For Clients By "name"</div>
				</div>
				<VerticalSpacer height={20}/>
				<div className="breaker"/>
				<VerticalSpacer height={30}/>
				<div className={styles.clientList}>
					<SubTitle title={"Client List"}/>
					<table>
						<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Address</th>
							<th>Edit</th>
						</tr>
						</thead>
						<tbody>
						{
							this.props.clients.length > 0 ? this.props.clients.map((client, index) => {
								return <tr key={index}>
									<td>{client.lastName}, {client.firstName}</td>
									<td>{transformToPhoneNumber(client.phone)}</td>
									<td>{client.email}</td>
									<td>{client.address}</td>
									<td>
										<Link to={"/dashboard/clients/" + client._id}>
											<i className="fad fa-edit"/>
										</Link>
									</td>
								</tr>
							}) : null
						}

						</tbody>
					</table>
				</div>
				<Modal submit={this.addNewClient} close={this.setModal} mode={this.state.modal} title={"Add New Client"}>
					<input type="text"
					       placeholder={"First Name"}
					       name={"firstName"} value={this.state.firstName}
					       onChange={(event => this.updateValues(event))}/>
					<input type="text"
					       placeholder={"Last Name"}
					       name={"lastName"} value={this.state.lastName}
					       onChange={(event => this.updateValues(event))}/>
					<input type="text"
					       placeholder={"Phone #"}
					       name={"phone"}
					       value={this.state.phone}
					       onChange={(event => this.updateValues(event))}/>
					<input type="text"
					       placeholder={"Email"}
					       name={"email"}
					       value={this.state.email}
					       onChange={(event => this.updateValues(event))}/>
					<input type="text"
					       placeholder={"Address"}
					       name={"address"}
					       value={this.state.address}
					       onChange={(event => this.updateValues(event))}/>
					<p className={styles.error}>{this.state.errorMessage}</p>
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSuccessfulNewClient: (data) => dispatch({type: 'NEW_CLIENT', data: data})
	}
};

const mapStateToProps = (state) => {
	return {
		clients: state.clients
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
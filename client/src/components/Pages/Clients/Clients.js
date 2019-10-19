import React from 'react';
import DashboardTitle from "../../Inflatables/DashboardTitle/DashboardTitle";
import styles from './Clients.module.css';
import SubTitle from "../../Inflatables/SubTitle/SubTitle";
import VerticalSpacer from "../../Inflatables/VerticalSpacer/VerticalSpacer";
import {Link} from "react-router-dom";
import Axios from "axios";
import {connect} from "react-redux";

class Clients extends React.Component {

	state = {
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: "",
		errorMessage: "",
		successMessage: ""
	};

	componentWillMount() {

		Axios.post("/api/clients/get-all-clients").then(result => {
			this.props.getAllClients(result.data.clients);
		})

	}

	updateValues = (event) => {
		let s = {...this.state};
		s[event.target.name] = event.target.value;
		this.setState(s);
	};

	addNewClient = async () => {

		let s = {...this.state};
		s.errorMessage = "";
		s.successMessage = "";
		await this.setState(s);

		let result = await Axios.post("/api/clients/add-new-client", {
			client: {
				firstName: s.firstName,
				lastName: s.lastName,
				phone: s.phone,
				email: s.email,
				address: s.address
			}
		});
		// NETWORK ERROR
		if (result.status !== 200) {
			s.errorMessage = "Network Error. Please try again.";
			await this.setState(s);
		}
		console.log(result);
		// CREATION ERROR
		if (result.data.status !== 200) {
			s.errorMessage = result.data.message;
			await this.setState(s);
		}
		// SUCCESS
		if (result.data.status === 200) {
			s.successMessage = result.data.message;
			this.props.onSuccessfulNewClient(result.data.client);
			await this.setState(s);
		}

	};


	render() {
		return (
			<div className={styles.clients}>
				<DashboardTitle title={"Client List"}/>

				<SubTitle title={"Live Search"}/>
				<div className={styles.liveSearch}>
					<input type="text" placeholder={"Begin Typing To Search..."}/>
					<div className={styles.searchName}>Searching For Clients By "name"</div>
				</div>
				<VerticalSpacer height={30}/>
				<div className={styles.newClient}>
					<SubTitle title={"Create New Client"}/>
					<table>
						<tbody>
						<tr>
							<td>
								<input type="text"
								       placeholder={"First Name"}
								       name={"firstName"} value={this.state.firstName}
								       onChange={(event => this.updateValues(event))}/>
							</td>
							<td>
								<input type="text"
								       placeholder={"Last Name"}
								       name={"lastName"} value={this.state.lastName}
								       onChange={(event => this.updateValues(event))}/>
							</td>
							<td>
								<input type="text"
								       placeholder={"Phone #"}
								       name={"phone"}
								       value={this.state.phone}
								       onChange={(event => this.updateValues(event))}/>
							</td>
							<td>
								<input type="text"
								       placeholder={"Email"}
								       name={"email"}
								       value={this.state.email}
								       onChange={(event => this.updateValues(event))}/>
							</td>
							<td>
								<input type="text"
								       placeholder={"Address"}
								       name={"address"}
								       value={this.state.address}
								       onChange={(event => this.updateValues(event))}/>
							</td>
							<td>
								<button onClick={() => this.addNewClient()}>Save</button>
							</td>
						</tr>
						</tbody>
					</table>
					<p className={styles.error}>{this.state.errorMessage}</p>
					<p className={styles.success}>{this.state.successMessage}</p>
				</div>
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
									<td>{client.phone}</td>
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
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSuccessfulNewClient: (data) => dispatch({type: 'NEW_CLIENT', data: data}),
		getAllClients: (data) => dispatch({type: 'GET_ALL_CLIENTS', data: data})
	}
};

const mapStateToProps = (state) => {
	return {
		clients: state.clients
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
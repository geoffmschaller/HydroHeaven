import React from 'react';
import styles from './Dashboard.module.css';
import {Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Clients from "../../Pages/Clients/Clients";
import DashboardNavigation from "../../Inflatables/DashboardNavigation/DashboardNavigation";
import ClientDetails from "../ClientDetails/ClientDetails";
import Axios from "axios";
import {connect} from "react-redux";

class Dashboard extends React.Component {

	componentWillMount = async () => {
		let token = localStorage.getItem("HH_Token");
		if (!token) {
			// REDIRECT OUT
		}
		await Axios.post("/api/clients/get-all-clients", {token: token}).then(result => {
			this.props.setAllClients(result.data.clients);
		});
	};

	render() {
		return (
			<div className={styles.dashboard}>
				<DashboardNavigation/>
				<div className={styles.workspace}>
					<div className={styles.workarea}>
						<Switch>
							<Route path={"/dashboard/clients"} exact={true} component={Clients}/>
							<Route path={"/dashboard/clients/:id"} exact={true} component={ClientDetails}/>
							<Route component={Home}/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}

}

const mapDispatchToProps = dispatch => {
	return {
		setAllClients: (data) => dispatch({type: 'SET_ALL_CLIENTS', data: data})
	}
};

const mapStateToProps = (state) => {
	return {
		clients: state.clients
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
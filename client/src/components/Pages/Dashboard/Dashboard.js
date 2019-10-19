import React from 'react';
import styles from './Dashboard.module.css';
import {Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Analytics from "../../Pages/Analytics/Analytics";
import Users from "../../Pages/Users/Users";
import Settings from "../../Pages/Settings/Settings";
import CleaningList from "../../Pages/CleaningList/CleaningList";
import Clients from "../../Pages/Clients/Clients";
import Orders from "../../Pages/Orders/Orders";
import DashboardNavigation from "../../Inflatables/DashboardNavigation/DashboardNavigation";
import ClientDetails from "../ClientDetails/ClientDetails";
import ServiceCalls from "../ServiceCalls/ServiceCalls";

class Dashboard extends React.Component {

	render() {
		return (
			<div className={styles.dashboard}>
				<DashboardNavigation/>
				<div className={styles.workspace}>
					<div className={styles.workarea}>
						<Switch>
							<Route path={"/dashboard/users"} exact={true} component={Users}/>
							<Route path={"/dashboard/cleaning-list"} exact={true} component={CleaningList}/>
							<Route path={"/dashboard/clients"} exact={true} component={Clients}/>
							<Route path={"/dashboard/clients/:id"} exact={true} component={ClientDetails}/>
							<Route path={"/dashboard/analytics"} exact={true} component={Analytics}/>
							<Route path={"/dashboard/settings"} exact={true} component={Settings}/>
							<Route path={"/dashboard/orders"} exact={true} component={Orders}/>
							<Route path={"/dashboard/service-calls"} exact={true} component={ServiceCalls}/>
							<Route component={Home}/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}

}

export default Dashboard;
import React from 'react';
import Navigation from "../Navigation/Navigation";
import styles from './Dashboard.module.css';
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Analytics from "../Analytics/Analytics";
import Users from "../Users/Users";
import Settings from "../Settings/Settings";

class Dashboard extends React.Component {

	render() {
		return (
			<div className={styles.dashboard}>
				<Navigation/>
				<div className={styles.workspace}>
					<div className={styles.workarea}>
						<Switch>
							<Route path={"/dashboard/users"} exact={true} component={Users}/>
							<Route path={"/dashboard/analytics"} exact={true} component={Analytics}/>
							<Route path={"/dashboard/settings"} exact={true} component={Settings}/>
							<Route component={Home}/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}

}

export default Dashboard;
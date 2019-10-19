import React from 'react';
import './App.css';
import IndexPage from "../Pages/IndexPage/IndexPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SpaDisplay from "../Pages/SpaDisplay/SpaDisplay";
import SpaDetails from "../Pages/SpaDetails/SpaDetails";
import SwimSpaDisplay from "../Pages/SwimSpaDisplay/SwimSpaDisplay";
import SwimSpaDetails from "../Pages/SwimSpaDetails/SwimSpaDetails";
import ServiceContact from "../Pages/ServiceContact/ServiceContact";
import BBQDisplay from "../Pages/BBQDisplay/BBQDisplay";
import BBQDetails from "../Pages/BBQDetails/BBQDetails";
import Login from "../Pages/Login/Login";
import {connect} from "react-redux";
import Axios from "axios";
import Dashboard from "../Pages/Dashboard/Dashboard";

class App extends React.Component {

	componentWillMount() {
		let token = localStorage.getItem("HH_Token");
		if (token) {
			Axios.post("/api/auth/verify-token", {token: token}).then(result => {
				if (result.data.status === 500) {
					localStorage.removeItem("HH_Token");
				} else if (result.data.status === 200) {
					this.props.onSuccessfulToken({email: result.data.user.email, id: result.data.user.id});
				}
			});
		}
	};

	render() {

		const protectedRoutes = [
			{
				path: "/dashboard",
				component: Dashboard
			}
		];

		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact={true} path={"/spas-hot-tubs"} component={SpaDisplay}/>
						<Route exact={true} path={"/spas-hot-tubs/:id"} component={SpaDetails}/>
						<Route exact={true} path={"/swim-spas"} component={SwimSpaDisplay}/>
						<Route exact={true} path={"/swim-spas/:id"} component={SwimSpaDetails}/>
						<Route exact={true} path={"/service-contact"} component={ServiceContact}/>
						<Route exact={true} path={"/bbq-islands"} component={BBQDisplay}/>
						<Route exact={true} path={"/bbq-islands/:id"} component={BBQDetails}/>
						<Route exact={true} path={"/login"} component={Login}/>
						{
							this.props.auth.verified ?
								protectedRoutes.map((route, index) => {
									return <Route key={index} path={route.path} component={route.component}/>
								}) : null
						}
						<Route component={IndexPage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}

}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSuccessfulToken: (data) => dispatch({type: 'LOGIN', data: data})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

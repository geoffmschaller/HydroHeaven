import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IndexPage from '../Pages/IndexPage/IndexPage';
import SpaDisplay from '../Pages/SpaDisplay/SpaDisplay';
import SpaDetails from '../Pages/SpaDetails/SpaDetails';
import SwimSpaDisplay from '../Pages/SwimSpaDisplay/SwimSpaDisplay';
import SwimSpaDetails from '../Pages/SwimSpaDetails/SwimSpaDetails';
import ServiceContact from '../Pages/ServiceContact/ServiceContact';
import BBQDisplay from '../Pages/BBQDisplay/BBQDisplay';
import BBQDetails from '../Pages/BBQDetails/BBQDetails';
import {connect} from "react-redux";
import {VerifyAuthToken} from "../../api/auth";
import {SET_USER} from "../../reducers/auth";

class App extends React.Component {

	componentWillMount = async () => {
		let token = localStorage.getItem("HH_Auth_Token");
		if (!token) return;
		const verificationCheck = await VerifyAuthToken(token);
		if (verificationCheck.data.status === 200) this.props.onTokenVerified(verificationCheck.data.payload);
	};

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/spas-hot-tubs" component={SpaDisplay}/>
						<Route exact path="/spas-hot-tubs/:id" component={SpaDetails}/>
						<Route exact path="/swim-spas" component={SwimSpaDisplay}/>
						<Route exact path="/swim-spas/:id" component={SwimSpaDetails}/>
						<Route exact path="/service-contact" component={ServiceContact}/>
						<Route exact path="/bbq-islands" component={BBQDisplay}/>
						<Route exact path="/bbq-islands/:id" component={BBQDetails}/>
						<Route path="/" component={IndexPage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTokenVerified: (payload) => dispatch({type: SET_USER, payload: payload})
	}
};

const mapStateToProps = state => {
	return {
		auth: state.user
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

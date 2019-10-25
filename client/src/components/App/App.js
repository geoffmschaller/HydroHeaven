import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import IndexPage from '../Pages/IndexPage/IndexPage';
import SpaDisplay from '../Pages/SpaDisplay/SpaDisplay';
import SpaDetails from '../Pages/SpaDetails/SpaDetails';
import SwimSpaDisplay from '../Pages/SwimSpaDisplay/SwimSpaDisplay';
import SwimSpaDetails from '../Pages/SwimSpaDetails/SwimSpaDetails';
import ServiceContact from '../Pages/ServiceContact/ServiceContact';
import BBQDisplay from '../Pages/BBQDisplay/BBQDisplay';
import BBQDetails from '../Pages/BBQDetails/BBQDetails';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';

class App extends React.Component {
	componentWillMount() {
		const token = localStorage.getItem('HH_Token');
		if (token) {
			Axios.post('/api/auth/verify-token', { token }).then((result) => {
				if (result.data.status === 500) {
					localStorage.removeItem('HH_Token');
				} else if (result.data.status === 200) {
					this.props.onSuccessfulToken({ email: result.data.user.email, id: result.data.user.id });
				}
			});
		}
	}

	render() {
		const protectedRoutes = [
			{
				path: '/dashboard',
				component: Dashboard,
			},
		];

		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/spas-hot-tubs" component={SpaDisplay} />
						<Route exact path="/spas-hot-tubs/:id" component={SpaDetails} />
						<Route exact path="/swim-spas" component={SwimSpaDisplay} />
						<Route exact path="/swim-spas/:id" component={SwimSpaDetails} />
						<Route exact path="/service-contact" component={ServiceContact} />
						<Route exact path="/bbq-islands" component={BBQDisplay} />
						<Route exact path="/bbq-islands/:id" component={BBQDetails} />
						<Route exact path="/login" component={Login} />
						{
							this.props.auth.verified
								? protectedRoutes.map((route, index) => <Route key={index} path={route.path} component={route.component} />) : null
						}
						<Route component={IndexPage} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	onSuccessfulToken: (data) => dispatch({ type: 'LOGIN', data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

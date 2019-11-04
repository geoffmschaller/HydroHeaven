import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IndexPage from '../Client Pages/IndexPage/IndexPage';
import SpaDisplay from '../Client Pages/SpaDisplay/SpaDisplay';
import SpaDetails from '../Client Pages/SpaDetails/SpaDetails';
import SwimSpaDisplay from '../Client Pages/SwimSpaDisplay/SwimSpaDisplay';
import SwimSpaDetails from '../Client Pages/SwimSpaDetails/SwimSpaDetails';
import ServiceContact from '../Client Pages/ServiceContact/ServiceContact';
import BBQDisplay from '../Client Pages/BBQDisplay/BBQDisplay';
import BBQDetails from '../Client Pages/BBQDetails/BBQDetails';
import Login from "../Client Pages/Login/Login";

class App extends React.Component {
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
						<Route exact path="/login" component={Login}/>
						<Route path="/" component={IndexPage}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

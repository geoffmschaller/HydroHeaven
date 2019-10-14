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

const App = (props) => {
	return (
		<div className="App">
			<BrowserRouter>
				<>
					<Switch>
						<Route exact={true} path={"/spas-hot-tubs"} component={SpaDisplay}/>
						<Route exact={true} path={"/spas-hot-tubs/:id"} component={SpaDetails}/>
						<Route exact={true} path={"/swim-spas"} component={SwimSpaDisplay}/>
						<Route exact={true} path={"/swim-spas/:id"} component={SwimSpaDetails}/>
						<Route exact={true} path={"/service-contact"} component={ServiceContact}/>
						<Route exact={true} path={"/bbq-islands"} component={BBQDisplay}/>
						<Route exact={true} path={"/bbq-islands/:id"} component={BBQDetails}/>
						<Route exact={true} path={"/"} component={IndexPage}/>
						<Route exact={true} path={"/login"} component={Login}/>
					</Switch>
				</>
			</BrowserRouter>
		</div>
	);
};

export default App;

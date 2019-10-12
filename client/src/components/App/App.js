import React from 'react';
import './App.css';
import NavigationBar from "../Inflatables/NavigationBar/NavigationBar";
import IndexPage from "../Pages/IndexPage/IndexPage";
import VerticalSpacer from "../Inflatables/VerticalSpacer/VerticalSpacer";
import Footer from "../Inflatables/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SpaDisplay from "../Pages/SpaDisplay/SpaDisplay";
import SpaDetails from "../Pages/SpaDetails/SpaDetails";
import SwimSpaDisplay from "../Pages/SwimSpaDisplay/SwimSpaDisplay";
import SwimSpaDetails from "../Pages/SwimSpaDetails/SwimSpaDetails";
import ServiceContact from "../Pages/ServiceContact/ServiceContact";
import BBQDisplay from "../Pages/BBQDisplay/BBQDisplay";
import BBQDetails from "../Pages/BBQDetails/BBQDetails";

const App = (props) => {
	return (
		<div className="App">
			<BrowserRouter>
				<>
					<NavigationBar/>
					<Switch>
						<Route exact={true} path={"/spas-hot-tubs"} component={SpaDisplay}/>
						<Route exact={true} path={"/spas-hot-tubs/:id"} component={SpaDetails}/>
						<Route exact={true} path={"/swim-spas"} component={SwimSpaDisplay}/>
						<Route exact={true} path={"/swim-spas/:id"} component={SwimSpaDetails}/>
						<Route exact={true} path={"/service-contact"} component={ServiceContact}/>
						<Route exact={true} path={"/bbq-islands"} component={BBQDisplay}/>
						<Route exact={true} path={"/bbq-islands/:id"} component={BBQDetails}/>
						<Route component={IndexPage}/>
					</Switch>
					<VerticalSpacer height={150}/>
					<Footer/>
				</>
			</BrowserRouter>
		</div>
	);
};

export default App;

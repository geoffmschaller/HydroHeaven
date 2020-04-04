import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IndexPage from '../pages/Home/Home';
import SpaDisplay from '../pages/Spas/Grid/SpaGrid';
import SpaDetails from '../pages/Spas/Details/SpaDetails';
import SwimSpaDisplay from '../pages/SwimSpas/Grid/SwimSpaGrid';
import SwimSpaDetails from '../pages/SwimSpas/Details/SwimSpaDetails';
import ServiceContact from '../pages/ServiceContact/ServiceContact';
import BBQDisplay from '../pages/BBQs/Grid/BBQGrid';
import BBQDetails from '../pages/BBQs/Details/BBQDetails';
import NavBar from "../inflatables/NavBar/NavBar";
import MainHeader from "../inflatables/MainHeader/MainHeader";
import Financing from "../pages/Financing/Financing";
import Footer from "../inflatables/Footer/Footer";
import SpasMain from "../pages/Spas/Main/SpasMain";

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<NavBar/>
					<MainHeader/>
					<Switch>
						<Route exact path="/spas-hot-tubs" component={SpasMain}/>
						<Route exact path="/spas-hot-tubs/grid/:type" component={SpaDisplay}/>
						<Route exact path="/spas-hot-tubs/view/:id" component={SpaDetails}/>
						<Route exact path="/swim-spas" component={SwimSpaDisplay}/>
						<Route exact path="/swim-spas/:id" component={SwimSpaDetails}/>
						<Route exact path="/service-contact" component={ServiceContact}/>
						<Route exact path="/bbq-islands" component={BBQDisplay}/>
						<Route exact path="/bbq-islands/:id" component={BBQDetails}/>
						<Route exact path="/financing" component={Financing}/>
						<Route path="/" component={IndexPage}/>
					</Switch>
					<Footer/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

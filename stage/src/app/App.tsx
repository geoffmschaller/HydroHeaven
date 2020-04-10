import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainHeader from "../inflatables/MainHeader/MainHeader";
import NavBar from "../inflatables/Navbar/NavBar";
import VideoHeader from "../inflatables/VideoHeader/VideoHeader";
import Footer from "../inflatables/Footer/Footer";
import SpasHotTubsMain from "../pages/SpasHotTubs/Main/SpasHotTubsMain";
import SpasHotTubsGrid from "../pages/SpasHotTubs/Grid/SpasHotTubsGrid";
import SpasHotTubsDetails from "../pages/SpasHotTubs/Details/SpasHotTubsDetails";
import ServiceContact from "../pages/ServiceContact/ServiceContact";
import Financing from "../pages/Financing/Financing";
import SwimSpasGrid from "../pages/SwimSpas/Grid/SwimSpasGrid";
import SwimSpasDetails from "../pages/SwimSpas/Details/SwimSpasDetails";
import BBQIslandsGrid from '../pages/BBQIslands/Grid/BBQIslandsGrid';
import BBQIslandsDetails from '../pages/BBQIslands/Details/BBQIslandsDetails';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<MainHeader/>
					<NavBar/>
					<VideoHeader/>
					<Switch>
						<Route exact path="/bbqs-islands/view/:id" component={BBQIslandsDetails}/>
						<Route exact path="/bbqs-islands" component={BBQIslandsGrid}/>
						<Route exact path="/swim-spas/view/:id" component={SwimSpasDetails}/>
						<Route exact path="/swim-spas" component={SwimSpasGrid}/>
						<Route exact path="/financing" component={Financing}/>
						<Route exact path="/service-contact" component={ServiceContact}/>
						<Route exact path="/spas-hot-tubs/view/:id" component={SpasHotTubsDetails}/>
						<Route exact path="/spas-hot-tubs/grid/:type" component={SpasHotTubsGrid}/>
						<Route exact path="/spas-hot-tubs" component={SpasHotTubsMain}/>
						<Route path="/" component={Home}/>
					</Switch>
					<Footer/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;

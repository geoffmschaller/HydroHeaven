import React, {FunctionComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import HotTubGrid from '../pages/HotTubGrid/HotTubGrid';
import './App.module.sass';
import HotTubDetails from "../pages/HotTubDetails/HotTubDetails";
import SwimSpasGrid from "../pages/SwimSpasGrid/SwimSpasGrid";
import SwimSpaDetails from "../pages/SwimSpaDetails/SwimSpaDetails";
import BBQIslandGrid from "../pages/BBQIslandGrid/BBQIslandGrid";
import BBQIslandDetails from "../pages/BBQIslandDetails/BBQIslandDetails";
import {AnimatePresence} from "framer-motion";
import Contact from "../pages/Contact/Contact";

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<AnimatePresence>
				<Switch>
					<Route path="/" exact component={HomePage}/>
					<Route path="/spas-hot-tubs" exact component={HotTubGrid}/>
					<Route path="/spas-hot-tubs/:id" exact component={HotTubDetails}/>
					<Route path="/swim-spas" exact component={SwimSpasGrid}/>
					<Route path="/swim-spas/:id" exact component={SwimSpaDetails}/>
					<Route path="/bbq-islands" exact component={BBQIslandGrid}/>
					<Route path="/bbq-islands/:id" exact component={BBQIslandDetails}/>
					<Route path="/service-contact" exact component={Contact}/>
				</Switch>
			</AnimatePresence>
		</BrowserRouter>
	);
}

export default App;

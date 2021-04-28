import React from 'react';
import './app.module.sass';
import HeaderBar from "../structures/HeaderBar/HeaderBar";
import ImageDisplay from "../structures/ImageDisplay/ImageDisplay";
import AvailableBanner from "../structures/AvailableBanner/AvailableBanner";

function App() {
	return (
		<div className="App">
			<HeaderBar/>
			<ImageDisplay/>
			<AvailableBanner/>
			<div style={{height: '1000px'}}/>
		</div>
	);
}

export default App;

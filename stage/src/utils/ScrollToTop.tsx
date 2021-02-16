import React, {FunctionComponent, useEffect} from 'react';
import {useLocation} from "react-router";

const ScrollToTop: FunctionComponent = () => {

	useEffect(() => {
		window.scroll({top: 0, left: 0});
	}, [useLocation().pathname])

	return(
		<div/>
	)
}

export default ScrollToTop;
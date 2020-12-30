import React, {FunctionComponent} from 'react';
import {motion} from 'framer-motion';

const FadePageTransition: FunctionComponent = (props) => {
	return (
		<motion.div
			exit={{opacity: 0}}
			animate={{opacity: 1}}
			initial={{opacity: 0}}
		>
			{props.children}
		</motion.div>
	)
}

export default FadePageTransition;
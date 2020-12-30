import React, {FunctionComponent} from 'react';
import {motion} from 'framer-motion';

interface Props {
	duration?: number
}

const ScaleUpAndFadeIn: FunctionComponent<Props> = (props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.5
			}}
			animate={{
				opacity: 1,
				scale: 1
			}}
			transition={{
				duration: props.duration !== undefined ? props.duration : 0.2
			}}
		>
			{props.children}
		</motion.div>
	)
}

export default ScaleUpAndFadeIn;
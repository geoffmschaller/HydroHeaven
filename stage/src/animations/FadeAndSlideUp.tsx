import React, {FunctionComponent} from 'react';
import {motion} from 'framer-motion';

interface Props {
	duration?: number
}

const FadeAndSlideUp: FunctionComponent<Props> = (props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 100
			}}
			animate={{
				opacity: 1,
				y: 0
			}}
			transition={{
				duration: props.duration !== undefined ? props.duration : 0.2
			}}
		>
			{props.children}
		</motion.div>
	)
}

export default FadeAndSlideUp;
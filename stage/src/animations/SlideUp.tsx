import React, {FunctionComponent} from 'react';
import {motion} from 'framer-motion';

interface Props {
	duration?: number
}

const SlideUp: FunctionComponent<Props> = (props) => {
	return (
		<motion.div
			initial={{
				y: 100
			}}
			animate={{
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

export default SlideUp;
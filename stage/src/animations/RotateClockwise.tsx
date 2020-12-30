import React, {FunctionComponent} from 'react';
import {motion} from 'framer-motion';

interface Props {
	duration?: number
}

const RotateClockwise: FunctionComponent<Props> = (props) => {
	return (
		<motion.div
			initial={{rotate: 0}}
			animate={{rotate: 360}}
			transition={{
				duration: props.duration !== undefined ? props.duration : 0.2
			}}
		>
			{props.children}
		</motion.div>
	)
}

export default RotateClockwise;
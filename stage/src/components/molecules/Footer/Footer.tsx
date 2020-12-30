import React, {FunctionComponent} from 'react';
import styles from './Footer.module.sass';
import FadeAndSlideUp from "../../../animations/FadeAndSlideUp";

interface Props {
	isDark: boolean
}

const Footer: FunctionComponent<Props> = (props) => {
	return (
		<FadeAndSlideUp>
			<div className={[styles.footer, props.isDark ? styles.dark : ""].join(" ")}>
				&copy; Kaloosian INC. {new Date().getFullYear()}. All Rights
				Reserved.
			</div>
		</FadeAndSlideUp>

	)
}

export default Footer;
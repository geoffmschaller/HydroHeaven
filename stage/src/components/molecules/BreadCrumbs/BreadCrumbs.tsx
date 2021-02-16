import React, {FunctionComponent} from 'react';
import styles from './BreadCrumbs.module.sass';
import {Link} from "react-router-dom";

interface Props {
	link: string,
	name: string,
}

const BreadCrumb: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles.breadCrumb}>
			<Link to={props.link}><i className="fas fa-chevron-double-left"/> {props.name}</Link>
		</div>
	)
}

export default BreadCrumb;
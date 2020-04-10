import React from 'react';
import styles from './BBQGridItem.module.sass';
import {Link} from "react-router-dom";
import BBQDataInterface from '../../interfaces/BBQDataInterface';

interface BBQGridItemProps {
	bbq: BBQDataInterface
}

class BBQGridItem extends React.Component<BBQGridItemProps, {}> {

	render() {

		return (
			<div className={styles.bbqGridItem}>
				<img src={this.props.bbq.image} alt=""/>
				<div className={styles.name}>{this.props.bbq.name}</div>
				<div className={styles.brand}>By {this.props.bbq.brand}</div>
				<Link to={"/bbqs-islands/view/" + this.props.bbq.id}>
					<button>View Details</button>
				</Link>
			</div>
		);
	}
}

export default BBQGridItem;
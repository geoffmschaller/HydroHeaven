import React from 'react';
import styles from './BBQGridItem.module.sass';
import {Link} from "react-router-dom";

class BBQGridItem extends React.Component {

	render() {

		return (
			<div className={styles.bbqGridItem}>
				<img src={this.props.bbq.image} alt=""/>
				<div className={styles.name}>{this.props.bbq.name}</div>
				<div className={styles.brand}>By {this.props.bbq.brand}</div>
				<Link to={"/bbqs-islands/view/" + this.props.bbq.id} onClick={() => this.props.click()}>
					<button>View Details</button>
				</Link>
			</div>
		);
	}
}

export default BBQGridItem;

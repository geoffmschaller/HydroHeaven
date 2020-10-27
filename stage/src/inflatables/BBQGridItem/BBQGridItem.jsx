import React from 'react';
import styles from './BBQGridItem.module.sass';
import HollowButton from '../Buttons/HollowButton';

class BBQGridItem extends React.Component {

	render() {

		return (
			<div className={styles.bbqGridItem}>
				<img src={this.props.bbq.image} alt=""/>
				<div className={styles.name}>{this.props.bbq.name}</div>
				<div className={styles.brand}>By {this.props.bbq.brand}</div>
				<HollowButton color={'dark'} external={false} link={'/bbqs-islands/view/' + this.props.bbq.id} title={"View Details"} width={100}/>
			</div>
		);
	}
}

export default BBQGridItem;

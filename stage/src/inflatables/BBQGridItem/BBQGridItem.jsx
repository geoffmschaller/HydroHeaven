import React from 'react';
import styles from './BBQGridItem.module.sass';
import HollowButton from '../Buttons/HollowButton';

const BBQGridItem = props => {
	return (
			<div className={styles.bbqGridItem}>
				<img src={props.bbq.image} alt=""/>
				<div className={styles.name}>{props.bbq.name}</div>
				<div className={styles.brand}>By {props.bbq.brand}</div>
				<HollowButton color={'dark'} external={false} link={'/bbqs-islands/view/' + props.bbq.id} title={"View Details"} width={100}/>
			</div>
		);
}

export default BBQGridItem;

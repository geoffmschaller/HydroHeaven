import React from 'react';
import styles from './BBQGridItem.module.sass';
import Button from '../Buttons/Button';

const BBQGridItem = props => {
	return (
		<div className={styles.bbqGridItem}>
			<img src={props.bbq.image} alt=""/>
			<div className={styles.name}>{props.bbq.name}</div>
			<div className={styles.brand}>By {props.bbq.brand}</div>
			<Button title="View Details" color="#3498db" link={`/bbqs-islands/view/${props.bbq.id}`} onClick={props.click} hollow="true"/>
		</div>
	);
}

export default BBQGridItem;

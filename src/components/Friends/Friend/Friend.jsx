import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={styles.item}>
			<div>
				<img src={props.imgSrc} />
			</div>
			<div className={styles.text}>
				{props.name + ' ' + props.surname}
			</div>
		</div>
	)
}

export default Friend;
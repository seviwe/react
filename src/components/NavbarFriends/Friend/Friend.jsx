import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={styles.friend}>
			<img src={props.imgSrc} /> {props.name}
		</div>
	)
}

export default Friend;
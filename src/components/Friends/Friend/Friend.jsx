import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={styles.item}>
			<div className={styles.imgDiv}>
				<img src={props.imgSrc} />
			</div>
			<div className={styles.text}>
				{props.name + ' ' + props.surname}
				<div className={styles.textMin}>
					{props.status}
				</div>
				<div className={styles.textMin}>
					{props.country + ', ' + props.city}
				</div>
			</div>
		</div>
	)
}

export default Friend;
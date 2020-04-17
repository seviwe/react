import React from 'react';
import styles from './User.module.css';
import noneAvatar from '../../../assets/img/noneAvatar.png';

const User = (props) => {
	return (
		<div className={styles.item}>
			<div>
				<img src={props.imgSrc != null ? props.imgSrc : noneAvatar} />
			</div>
			<div className={styles.text}>
				{/* {props.name + ' ' + props.surname} */}
				{props.name}
				<div className={styles.textMin}>
					{props.status}
				</div>
				<div className={styles.textMin}>
					{/* {props.country + ', ' + props.city} */}
					Страна, город
				</div>
				<div>
					{
						props.followed
							? <button onClick={() => { props.unfollow(props.id) }}>Отписаться</button>
							: <button onClick={() => { props.follow(props.id) }}>Подписаться</button>
					}
				</div>
			</div>
		</div>
	)
}

export default User;
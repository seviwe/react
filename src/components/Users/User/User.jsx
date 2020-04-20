import React from 'react';
import styles from './User.module.css';
import noneAvatar from '../../../assets/img/noneAvatar.png';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const User = (props) => {
	return (
		<div className={styles.item}>
			<div className={styles.imgDiv}>
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
				</div>
				<div>
					{
						props.followed
							? <Button variant="contained" size="small" color="secondary" style={{ marginTop: '10px' }} endIcon={<Icon>cancel</Icon>} onClick={() => { props.unfollow(props.id) }}>Отписаться</Button>
							: <Button variant="contained" size="small" color="primary" style={{ marginTop: '10px' }} endIcon={<Icon>add_circle</Icon>} onClick={() => { props.follow(props.id) }}>Подписаться</Button>
					}
				</div>
			</div>
		</div>
	)
}

export default User;
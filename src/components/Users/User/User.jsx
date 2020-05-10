import React from 'react';
import styles from './User.module.css';
import noneAvatar from '../../../assets/img/noneAvatar.png';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = (props) => {
	return (
		<div className={styles.item}>
			<div className={styles.imgDiv}>
				<NavLink to={"/profile/" + props.id}>
					<img src={props.imgSrc != null ? props.imgSrc : noneAvatar} />
				</NavLink>
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
							? <Button variant="contained" size="small" color="secondary" style={{ marginTop: '10px' }} endIcon={<Icon>cancel</Icon>} onClick={() => {
								axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + props.id, {
									withCredentials: true,
									headers: {
										"API-KEY": "b19640f8-e1c6-4c7e-b9f4-4fc65e7a380e"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.unfollow(props.id)
										}
									});
							}
							}>Отписаться</Button>
							: <Button variant="contained" size="small" color="primary" style={{ marginTop: '10px' }} endIcon={<Icon>add_circle</Icon>} onClick={() => {
								axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + props.id, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "b19640f8-e1c6-4c7e-b9f4-4fc65e7a380e"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.follow(props.id)
										}
									});
							}
							}>Подписаться</Button>
					}
				</div>
			</div>
		</div>
	)
}

export default User;
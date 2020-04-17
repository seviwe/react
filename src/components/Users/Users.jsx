import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {

	if (props.usersPage.users.length === 0) {
		//запрос с сервера пользователей
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers(response.data.items);
		});
	}

	//было раньше до подключения к серверу
	// let usersElement = props.usersPage.users.map(u => <User name={u.name} surname={u.surname} id={u.id} imgSrc={u.imgSrc} status={u.status} country={u.location.country} city={u.location.city} followed={u.followed} follow={props.follow} unfollow={props.unfollow} />);

	let usersElement = props.usersPage.users.map(u => <User name={u.name} id={u.id} imgSrc={u.photos.small} status={u.status} followed={u.followed} follow={props.follow} unfollow={props.unfollow} />);

	return (
		<div>
			<div className={styles.panel}>
				Поиск пользователей...
			</div>
			<div className={styles.listUsers}>
				{usersElement}
			</div>
		</div>
	)
}

export default Users;
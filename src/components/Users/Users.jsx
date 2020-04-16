import React from 'react';
import styles from './Users.module.css';
import User from './User/User';

const Users = (props) => {
	let usersElement = props.usersPage.users.map(u => <User name={u.name} surname={u.surname} id={u.id} imgSrc={u.imgSrc} status={u.status} country={u.location.country} city={u.location.city} followed={u.followed} follow={props.follow} unfollow={props.unfollow} />);

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
import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {
	constructor(props) {
		super(props);

		//запрос с сервера пользователей
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		let usersElement = this.props.usersPage.users.map(u => <User name={u.name} id={u.id} imgSrc={u.photos.small} status={u.status} followed={u.followed} follow={this.props.follow} unfollow={this.props.unfollow} />);

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
}

export default Users;
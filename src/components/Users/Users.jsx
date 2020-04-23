import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';

class Users extends React.Component {
	componentDidMount() {
		//запрос с сервера пользователей
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.currentPage + "&count=" + this.props.pageSize)
		.then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);

		//запрос с сервера пользователей
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + pageNumber + "&count=" + this.props.pageSize)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		let usersElement = this.props.usersPage.users.map(u => <User name={u.name} id={u.id} imgSrc={u.photos.small} status={u.status} followed={u.followed} follow={this.props.follow} unfollow={this.props.unfollow} />);

		return (
			<div>
				<div className={styles.panel}>
					Поиск пользователей...
				</div>
				<div className={styles.listUsers}>
					{usersElement}
				</div>
				<div className={styles.paginationCenter}>
					{/* <Pagination count={10} color="primary" /> */}
					{pages.map(p => { return <span className={this.props.currentPage === p && styles.selectedPage} onClick={(e) => { this.onPageChanged(p); }}>{p} </span> })}
				</div>
			</div>
		)
	}
}

export default Users;
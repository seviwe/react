//import UsersAPIComponent from './UsersAPIComponent';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from './../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true); //отображение крутилки загрузки
		//запрос с сервера пользователей, где страница = 1, currentPage указывается в usersReducer
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.currentPage + "&count=" + this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false); //отключить крутилку загрузки
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		//запрос с сервера пользователей, где отображается выбранная страница
		axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + pageNumber + "&count=" + this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				usersPage={this.props.usersPage}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalUsersCount) => {
			dispatch(setTotalUsersCountAC(totalUsersCount));
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
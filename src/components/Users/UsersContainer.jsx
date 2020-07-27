import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from './../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from '../../selectors/usersSelectors';
import { useEffect } from 'react';
import { getIsAuth } from '../../selectors/authSelectors';

const UsersContainer = (props) => {
	useEffect(() => {
		let {currentPage, pageSize} = props; //деструктуризация пропсов
		props.getUsers(currentPage, pageSize);
	}, [])

	const onPageChanged = (pageNumber) => {
		props.getUsers(pageNumber);
		props.setCurrentPage(pageNumber);
	}

	return <>
		{props.isFetching ? <Preloader /> : null}
		<Users
			totalUsersCount={props.totalUsersCount}
			pageSize={props.pageSize}
			usersPage={props.usersPage}
			currentPage={props.currentPage}
			onPageChanged={onPageChanged}
			follow={props.follow}
			unfollow={props.unfollow}
			toggleIsFollowInProgress={props.toggleIsFollowInProgress}
			followingInProgress={props.followingInProgress}
			isAuth={props.isAuth}
		/>
	</>
}

let mapStateToProps = (state) => {
	return {
		usersPage: getUsersSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state),
	}
}

export default compose(
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }))(UsersContainer);
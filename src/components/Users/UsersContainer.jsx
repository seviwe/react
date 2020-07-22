import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from './../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth, getUsersSelector } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber);
		this.props.setCurrentPage(pageNumber);
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
				toggleIsFollowInProgress={this.props.toggleIsFollowInProgress}
				followingInProgress={this.props.followingInProgress}
				isAuth={this.props.isAuth}
			/>
		</>
	}
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
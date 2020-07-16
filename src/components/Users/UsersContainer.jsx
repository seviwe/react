import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, getUsers } from './../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';

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
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers })(UsersContainer);
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from './../../redux/usersReducer';

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage,
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
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
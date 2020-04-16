import '../../redux/friendsReducer';
import NavbarFriends from './NavbarFriends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		friendsPage: state.friendsPage.friends
	}
}

const NavbarFriendsContainer = connect(mapStateToProps)(NavbarFriends);

export default NavbarFriendsContainer;
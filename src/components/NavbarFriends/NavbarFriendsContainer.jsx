import '../../redux/friendsReducer';
import NavbarFriends from './NavbarFriends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		friendsPage: state.friendsPage.friends
	}
}

export default connect(mapStateToProps)(NavbarFriends);
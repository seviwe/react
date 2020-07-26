import '../../redux/friendsReducer';
import NavbarFriends from './NavbarFriends';
import { connect } from 'react-redux';
import { getFriends } from './../../selectors/friendsSelectors';

let mapStateToProps = (state) => {
	return {
		friendsPage: getFriends(state)
	}
}

export default connect(mapStateToProps)(NavbarFriends);
import Friends from './Friends';
import '../../redux/friendsReducer';
import { connect } from 'react-redux';
import { getFriends } from './../../selectors/friendsSelectors';

let mapStateToProps = (state) => {
	return {
		friendsPage: getFriends(state)
	}
}

export default connect(mapStateToProps)(Friends);
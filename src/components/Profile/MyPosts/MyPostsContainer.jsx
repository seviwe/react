import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPost, setLikePost, setDislikePost, unsetLikePost, unsetDislikePost, deletePost } from '../../../redux/profileReducer';
import { getPosts, getAvatar } from '../../../selectors/profileSelectors';
import { getLogin, getIsAuth } from '../../../selectors/authSelectors';

let mapStateToProps = (state) => {
	return {
		posts: getPosts(state),
		isAuth: getIsAuth(state),
		login: getLogin(state),
		avaPhoto: getAvatar(state),
	}
}

//connect()() вызов функции connect, а потом вызов того, что она вернула
export default connect(mapStateToProps, { addPost, setLikePost, setDislikePost, unsetLikePost, unsetDislikePost, deletePost })(MyPosts);
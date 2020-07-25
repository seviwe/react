import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPost, setLikePost, setDislikePost, unsetLikePost, unsetDislikePost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	//console.log(state);
	return {
		posts: state.profilePage.posts,
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
}

//connect()() вызов функции connect, а потом вызов того, что она вернула
export default connect(mapStateToProps, { addPost, setLikePost, setDislikePost, unsetLikePost, unsetDislikePost })(MyPosts);
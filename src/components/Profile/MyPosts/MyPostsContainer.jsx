import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

//connect()() вызов функции connect, а потом вызов того, что она вернула
const MyPostsContainer = connect(mapStateToProps, { updateNewPostText, addPost })(MyPosts);

export default MyPostsContainer;
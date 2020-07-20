import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	//console.log(state.auth.isAuth);
	return {
		posts: state.profilePage.posts,
		isAuth: state.auth.isAuth, 
		//newPostText: state.profilePage.newPostText
	}
}

//connect()() вызов функции connect, а потом вызов того, что она вернула
const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
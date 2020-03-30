import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	
	let state = props.store.getState().profilePage;

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	const onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text));
	};

	return (
		<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText} />
	)
}

export default MyPostsContainer;
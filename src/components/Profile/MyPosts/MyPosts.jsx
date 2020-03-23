import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	const onPostChange = (event) => {
		props.dispatch(updateNewPostTextActionCreator(event.target.value));
	};

	return (
		<div className={styles.myposts}>
			Новый пост:
			<div className={styles.newPost}>
				<textarea onChange={onPostChange} value={props.newPostText} />
				<button onClick={addPost}>Добавить</button>
			</div>
			<div className={styles.posts}>
				Посты:
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;
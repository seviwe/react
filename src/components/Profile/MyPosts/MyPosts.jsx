import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

	let onAddPost = () => {
		props.addPost();
	}

	const onPostChange = (event) => {
		props.updateNewPostText(event.target.value);
	};

	return (
		<div className={styles.myposts}>
			Новый пост:
			<div className={styles.newPost}>
				<textarea onChange={onPostChange} value={props.newPostText} />
				<button onClick={onAddPost}>Добавить</button>
			</div>
			<div className={styles.posts}>
				Посты:
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;
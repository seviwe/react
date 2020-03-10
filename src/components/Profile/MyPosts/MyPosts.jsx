import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

	let posts = [
		{ id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
		{ id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
		{ id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
	];

	let postsElement = posts.map(p => <Post message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

	return (
		<div className={styles.myposts}>
			My posts:
			<div>
				<textarea></textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={styles.posts}>
				Posts:
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;
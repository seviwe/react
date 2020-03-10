import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
		{ id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
		{ id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
	];

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
				<Post message={postsData[0].message} countLike={postsData[0].countLike} countDislike={postsData[0].countDislike} />
				<Post message={postsData[1].message} countLike={postsData[1].countLike} countDislike={postsData[1].countDislike} />
				<Post message={postsData[2].message} countLike={postsData[2].countLike} countDislike={postsData[2].countDislike} />
			</div>
		</div>
	)
}

export default MyPosts;
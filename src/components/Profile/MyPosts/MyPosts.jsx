import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

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
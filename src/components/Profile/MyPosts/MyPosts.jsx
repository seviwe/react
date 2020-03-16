import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		if (text) {
			props.addPost(text);
		}
		newPostElement.current.value = '';
	}

	return (
		<div className={styles.myposts}>
			Новый пост:
			<div className={styles.newPost}>
				<textarea ref={newPostElement}></textarea>
				<button onClick={addPost}>Добавить</button>
				{/* <button>Удалить</button> */}
			</div>
			<div className={styles.posts}>
				Посты:
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;
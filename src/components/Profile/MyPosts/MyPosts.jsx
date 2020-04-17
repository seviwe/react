import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

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
			<div className={styles.newPost}>
				<TextField
					id="outlined-multiline-static"
					label="Введите пост..."
					multiline
					variant="outlined"
					onChange={onPostChange}
					value={props.newPostText}
					className={styles.textArea}
				/>
				<Button variant="contained" size="medium" color="primary" style={{marginTop: '10px'}} endIcon={<Icon>send</Icon>} onClick={onAddPost}>Добавить</Button>
			</div>
			<div className={styles.posts}>
				{postsElement}
			</div>
		</div>
	)
}

export default MyPosts;
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
//import TextField from '@material-ui/core/TextField';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {

	let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} countLike={p.countLike} countDislike={p.countDislike} />);

	let addNewPost = (values) => {
		props.addPost(values.newPostBody);
	}
	console.log(props);

	return (
		<div className={styles.myposts}>
			<div className={styles.newPost}>
				{/* <TextField
					id="outlined-multiline-static"
					label="Введите пост..."
					multiline
					variant="outlined"
					onChange={onPostChange}
					value={props.newPostText}
					className={styles.textArea}
				/>
				<Button variant="contained" size="medium" color="primary" style={{marginTop: '10px'}} endIcon={<Icon>send</Icon>} onClick={onAddPost}>Добавить</Button> */}
				<AddPostReduxForm onSubmit={addNewPost} />
			</div>
			<div className={styles.posts}>
				{postsElement}
			</div>
		</div>
	)
}

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={"textarea"} cols={"87"} name={"newPostBody"} placeholder={"Введите текст..."} />
			<div>
				<button>Отправить</button>
			</div>
		</form>
	)
}
const AddPostReduxForm = reduxForm({ form: 'postAddForm' })(PostForm);

export default MyPosts;
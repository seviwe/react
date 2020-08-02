import React, { Suspense } from 'react';
import styles from './MyPosts.module.css';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
//import TextField from '@material-ui/core/TextField';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { FormControl } from '../../common/FormsControls/FormsControls';
import Preloader from './../../common/Preloader/Preloader';
const Post = React.lazy(() => import('./Posts/Post'));

const maxLength = maxLengthCreator(300);

const MyPosts = (props) => {
	let postsElement =
		[...props.posts]
			.reverse()
			.map(p => <Suspense key={p.id} fallback={<Preloader />}>
				<Post key={p.id} id={p.id} message={p.message} countLike={p.countLike} countDislike={p.countDislike} setLikePost={props.setLikePost} setDislikePost={props.setDislikePost} userId={p.userId} setLike={p.setLike} setDislike={p.setDislike} unsetLikePost={props.unsetLikePost} unsetDislikePost={props.unsetDislikePost} login={props.login} deletePost={props.deletePost} isOwner={props.isOwner} avaPhoto={props.avaPhoto} profile={props.profile} /></Suspense>);

	let addNewPost = (values) => {
		props.addPost(values.newPostBody);
	}

	return (
		<div className={styles.myposts}>
			{props.isAuth
				&& <div className={styles.newPost}>
					<AddPostReduxForm onSubmit={addNewPost} />
				</div>
			}
			<div className={styles.posts}>
				{postsElement}
			</div>
		</div>
	)
}

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
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
			<Field component={FormControl} controlType="textarea" className={styles.textAreaWidthAuto} name={"newPostBody"} placeholder={"Введите текст..."} validate={[required, maxLength]} />
			<div>
				<button>Отправить</button>
			</div>
		</form>
	)
}

const AddPostReduxForm = reduxForm({ form: 'postAddForm' })(PostForm);

export default MyPosts;
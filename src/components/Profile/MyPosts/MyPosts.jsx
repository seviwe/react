import React, { Suspense } from 'react';
import styles from './MyPosts.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { FormControl, renderTextField } from '../../common/FormsControls/FormsControls';
import Preloader from './../../common/Preloader/Preloader';
const Post = React.lazy(() => import('./Posts/Post'));

const maxLength = maxLengthCreator(300);

const MyPosts = (props) => {
	let postsElement =
		[...props.posts]
			.reverse()
			.map(p => <Suspense key={p.id} fallback={<Preloader />}>
				<Post key={p.id} id={p.id} isAuth={props.isAuth} message={p.message} countLike={p.countLike} countDislike={p.countDislike} setLikePost={props.setLikePost} setDislikePost={props.setDislikePost} userId={p.userId} setLike={p.setLike} setDislike={p.setDislike} unsetLikePost={props.unsetLikePost} unsetDislikePost={props.unsetDislikePost} login={props.login} deletePost={props.deletePost} isOwner={props.isOwner} avaPhoto={props.avaPhoto} profile={props.profile} /></Suspense>);

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
			<Field component={renderTextField} className={styles.textAreaWidthAuto} name={"newPostBody"} label={"Введите текст..."} validate={[required, maxLength]} />
			<div>
				{/*<Button variant="contained" size="medium" color="primary" style={{marginTop: '10px'}} endIcon={<Icon>send</Icon>} onClick={onAddPost}>Добавить</Button> */}
				<button>Отправить</button>
			</div>
		</form>
	)
}

const AddPostReduxForm = reduxForm({ form: 'postAddForm' })(PostForm);

export default MyPosts;
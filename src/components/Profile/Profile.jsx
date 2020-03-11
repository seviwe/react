import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	return (
		<div>
			<div>
				Описание пользователя
			</div>
			<MyPosts posts={props.posts}/>
		</div>
	)
}

export default Profile;
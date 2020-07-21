import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} />
			<MyPostsContainer />
		</>
	)
}

export default Profile;
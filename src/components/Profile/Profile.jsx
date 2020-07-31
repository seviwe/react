import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<>
			<ProfileInfo profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} saveProfile={props.saveProfile} />
			<MyPostsContainer isOwner={props.isOwner} />
		</>
	)
}

export default Profile;
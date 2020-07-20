import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	//console.log(props);
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile;
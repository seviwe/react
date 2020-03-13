import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	return (
		<div>
			<div>
				<div>
					Укажите статус...
				</div>
				<hr />
				<div className="">
					День рождения: 17 мая 1997 г.
				</div>
				<div className="">
					Город: Муром
				</div>
				<div className="">
					Место учебы: МИ ВлГУ им. Столетовых '20
				</div>
			</div>
			<hr />
			<MyPosts posts={props.state.posts}/>
		</div>
	)
}

export default Profile;
import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
	return (
		<div>
			<div>
				<div className={styles.border}>
					Укажите статус...
				</div>
				<div className className={styles.border}>
					День рождения: 17 мая 1997 г. <br />
					Город: Муром <br />
					Место учебы: МИ ВлГУ им. Столетовых '20
				</div>
			</div>
			<MyPosts posts={props.state.posts} />
		</div>
	)
}

export default Profile;
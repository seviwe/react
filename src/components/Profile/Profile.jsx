import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://ic.pics.livejournal.com/fanatbaikala/61253622/44374/44374_original.jpg" />
      </div>
        <div>
          avatar + desc
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
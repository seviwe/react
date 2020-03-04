import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://ic.pics.livejournal.com/fanatbaikala/61253622/44374/44374_original.jpg" />
      </div>
      <div>
        avatar + desc
   </div>
      <div>
        My posts
     <div>
          New post
     </div>
        <div className='posts'>
          <div className={styles.item}>
            post 1
        </div>
          <div className={styles.item}>
            post 2
         </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
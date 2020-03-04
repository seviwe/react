import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq" />
      My post test test test test test!
      <div>
        <span>Like :)</span>
        <span>Dislike :(</span>
      </div>
    </div>
  )
}

export default Post;
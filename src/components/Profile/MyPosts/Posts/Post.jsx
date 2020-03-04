import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq" />
      {props.message}
      <div>
        <span>Like ({props.countLike}) </span>
        <span>Dislike ({props.countDislike})</span>
      </div>
    </div>
  )
}

export default Post;
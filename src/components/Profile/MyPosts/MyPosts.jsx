import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div>
      My posts:
        <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={styles.posts}>
        Posts: 
        <Post message="Hello World!" countLike="20" countDislike="6"/>
        <Post message="It's my first post." countLike="17" countDislike="1"/>
      </div>
    </div>
  )
}

export default MyPosts;
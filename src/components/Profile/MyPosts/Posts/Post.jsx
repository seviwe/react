import React from 'react';
import styles from './Post.module.css';
import Badge from '@material-ui/core/Badge';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Post = (props) => {
	return (
		<div className={styles.item}>
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq" />
			</div>
			<div>
				<div className={styles.postMessage}>
					{props.message}
				</div>
				<hr />
				<div className={styles.LikeDislike}>
					<span className={styles.like}>
						<Badge badgeContent={props.countLike} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
							<ThumbUpAltIcon fontSize="small" />
						</Badge>
					</span>
					<span className={styles.dislike}>
						<Badge badgeContent={props.countDislike} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
							<ThumbDownIcon fontSize="small" />
						</Badge>
					</span>
				</div>
			</div>
			<br />
		</div>
	)
}

export default Post;
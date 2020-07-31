import React from 'react';
import styles from './Post.module.css';
import Badge from '@material-ui/core/Badge';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Avatar from '@material-ui/core/Avatar';

const Post = (props) => {
	return (
		<div className={styles.item}>
			<div>
				{!props.avaPhoto && <Avatar>VA</Avatar>}
				{props.avaPhoto && <Avatar alt="avatar" src={props.avaPhoto} />}
			</div>
			<div>
				<div className={styles.postMessage}>
					<span>{props.login} добавил новый пост:</span>
					{props.isOwner &&
						<span onClick={() => { props.deletePost(props.id); }} className={styles.delPost}><HighlightOffIcon fontSize="small" /></span>
					}
				</div>
				<div className={styles.postMessage}>
					{props.message}
				</div>
				<hr />
				<div className={styles.LikeDislike}>
					{!props.setLike && !props.setDislike /*если непоставили лайк и не поставили дизлайк*/
						?
						<span className={styles.like}>
							<Badge badgeContent={props.countLike} onClick={() => {
								props.setLikePost(props.id);
							}} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
								<ThumbUpAltOutlinedIcon fontSize="small" />
							</Badge>
						</span>
						:
						<>
							{props.setLike && !props.setDislike ? /*если поставили лайк и дизлайк не стоит*/
								<span className={styles.like}>
									<Badge badgeContent={props.countLike} onClick={() => {
										props.unsetLikePost(props.id);
									}} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
										<ThumbUpAltIcon fontSize="small" />
									</Badge>
								</span>
								: /*если не поставили лайк и дизлайк стоит*/
								<span className={styles.like}>
									<Badge badgeContent={props.countLike} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
										<ThumbUpAltOutlinedIcon fontSize="small" />
									</Badge>
								</span>
							}
						</>
					}
					{!props.setDislike && !props.setLike
						?
						<span className={styles.dislike}>
							<Badge badgeContent={props.countDislike} onClick={() => {
								props.setDislikePost(props.id);
							}} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
								<ThumbDownOutlinedIcon fontSize="small" />
							</Badge>
						</span>
						:
						<>
							{props.setDislike && !props.setLike ?
								<span className={styles.dislike}>
									<Badge badgeContent={props.countDislike} onClick={() => {
										props.unsetDislikePost(props.id);
									}} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
										<ThumbDownIcon fontSize="small" />
									</Badge>
								</span>
								:
								<span className={styles.dislike}>
									<Badge badgeContent={props.countDislike} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
										<ThumbDownOutlinedIcon fontSize="small" />
									</Badge>
								</span>
							}
						</>
					}
				</div>
			</div>
			<br />
		</div>
	)
}

export default Post;
import React from 'react';
import styles from './AvatarImage.module.css';

const AvatarImage = (props) => {

	// if (!props.imgSrc) {
	// 	return (
	// 		<div className={styles.avatar}>
	// 			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZH7c1xxmppduvnIzq7oevpcDCK3nDoGgqjR6-yZ7L7kHCKDeq" />
	// 		</div>
	// 	)
	// }

	return (
		<div className={styles.avatar}>
			<img src={props.imgSrc} />
		</div>
	)
}

export default AvatarImage;
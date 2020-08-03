import React from 'react';
import styles from './AvatarImage.module.css';
import noneAvatar from '../../../../assets/img/noneAvatar.png';

const AvatarImage = (props) => {
	if (!props.imgSrc) { //если нет фото
		return (
			<div className={styles.avatar}>
				<img src={noneAvatar} />
			</div>
		)
	}

	return (
		<div className={styles.avatar}>
			<img src={props.imgSrc} />
		</div>
	)
}

export default AvatarImage;
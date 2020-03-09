import React from 'react';
import styles from './BackgroundImage.module.css';
import AvatarImage from './AvatarImage/AvatarImage';

const BackgroundImage = () => {
	return (
		<div className={styles.backimage}>
			<AvatarImage />
      </div>
	)
}

export default BackgroundImage;
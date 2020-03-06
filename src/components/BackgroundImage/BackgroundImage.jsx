import React from 'react';
import styles from './BackgroundImage.module.css';
import AvatarImage from './AvatarImage/AvatarImage';

const BackgroundImage = () => {
	return (
		<div className={styles.backimage}>
			<AvatarImage />
			{/* <img src="https://ic.pics.livejournal.com/fanatbaikala/61253622/44374/44374_original.jpg"/> */}
			здесь фоновое изображение
      </div>
	)
}

export default BackgroundImage;
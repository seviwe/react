import React from 'react';
import styles from './BackgroundImage.module.css';
import AvatarImage from './AvatarImage/AvatarImage';

const BackgroundImage = () => {
	return (
		<div className={styles.backimage}>
			<AvatarImage />
			<div className={styles.top}>
			</div>
			<div className={styles.bottom}>
				<div className={styles.text}>
					Vsevolod Aleynikov, 22 y.o., Murom, Russian Federation
				</div>
			</div>
		</div>
	)
}

export default BackgroundImage;
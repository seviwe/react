import React from 'react';
import styles from './NavbarMusic.module.css';

//{`${styles.item} ${styles.active}`}

const NavbarMusic = () => {
	return (
		<div className={styles.NavbarMusic}>
			Music
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Item 4</li>
				<li>Item 5</li>
			</ul>
		</div>
	)
}

export default NavbarMusic;
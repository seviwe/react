import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<a href="http://localhost:3000/"><img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" /></a>
			<a href="http://localhost:3000/" className={styles.logoText}>AntiVK</a>
		</header>
	)
}

export default Header;
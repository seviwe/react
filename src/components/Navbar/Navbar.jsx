import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

//{`${styles.item} ${styles.active}`}

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to="/profile" activeClassName={styles.activeLink}>Профиль</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/dialogs" activeClassName={styles.activeLink}>Диалоги</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/friends" activeClassName={styles.activeLink}>Друзья</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/news" activeClassName={styles.activeLink}>Лента</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/music" activeClassName={styles.activeLink}>Музыка</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/users" activeClassName={styles.activeLink}>Пользователи</NavLink>
			</div>
			<br />
			<div className={styles.item}>
				<NavLink to="/settings" activeClassName={styles.activeLink}>Настройки</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;
import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SettingsIcon from '@material-ui/icons/Settings';

const Navbar = (props) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to="/profile" activeClassName={styles.activeLink}><HomeIcon fontSize="small" />  Профиль</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/dialogs" activeClassName={styles.activeLink}><QuestionAnswerIcon fontSize="small" />  Диалоги</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/friends" activeClassName={styles.activeLink}><PeopleIcon fontSize="small" />  Друзья</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/news" activeClassName={styles.activeLink}><RssFeedIcon fontSize="small" />  Лента</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/music" activeClassName={styles.activeLink}><LibraryMusicIcon fontSize="small" />  Музыка</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to="/users" activeClassName={styles.activeLink}><PersonAddIcon fontSize="small" />  Пользователи</NavLink>
			</div>
			<br />
			<div className={styles.item}>
				<NavLink to="/settings" activeClassName={styles.activeLink}><SettingsIcon fontSize="small" />  Настройки</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;
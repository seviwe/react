import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<a href="http://localhost:3000/profile"><img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" /></a>
			<a href="http://localhost:3000/profile" className={styles.logoText}>AntiVK</a>
			<div className={styles.loginBlock}>
				{props.isAuth
					? <div><span className={styles.loginName}>{props.login}</span></div>
					: <NavLink to={'/login'}>
						<Button variant="contained" color="primary" size="small">
							Войти
				  		</Button>
					</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;
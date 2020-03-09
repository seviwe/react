import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/1" activeClassName={styles.activeLink}>Дмитрий</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/2" activeClassName={styles.activeLink}>Светлана</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/3" activeClassName={styles.activeLink}>Женя</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/4" activeClassName={styles.activeLink}>Андрей</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/5" activeClassName={styles.activeLink}>Александр</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/6" activeClassName={styles.activeLink}>Мария</NavLink>
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>Привет!</div>
				<div className={styles.message}>Как дела?</div>
				<div className={styles.message}>Чем занимаешься?</div>
			</div>
		</div>
	)
}

export default Dialogs;
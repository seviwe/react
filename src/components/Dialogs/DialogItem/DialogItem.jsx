import React from 'react';
import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={styles.activeLink}><img src={props.imgSrc} className={styles.imgDialog} /> <div className={styles.name}>{props.name}</div></NavLink>
		</div>
	)
}

export default DialogItem;
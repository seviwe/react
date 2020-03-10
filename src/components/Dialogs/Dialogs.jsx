import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={styles.message}>{props.message}</div>
	)
}

const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name="Дмитрий" id="1" />
				<DialogItem name="Светлана" id="2" />
				<DialogItem name="Женя" id="3" />
				<DialogItem name="Андрей" id="4" />
				<DialogItem name="Александр" id="5" />
				<DialogItem name="Мария" id="6" />
			</div>
			<div className={styles.messages}>
				<Message message="Привет!" />
				<Message message="Как дела?" />
				<Message message="Чем занимаешься?" />
			</div>
		</div>
	)
}

export default Dialogs;
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

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Дмитрий' },
		{ id: 2, name: 'Светлана' },
		{ id: 3, name: 'Женя' },
		{ id: 4, name: 'Андрей' },
		{ id: 5, name: 'Александр' },
		{ id: 6, name: 'Мария' }
	];

	let messagesData = [
		{ id: 1, message: 'Привет!' },
		{ id: 2, message: 'Как дела?' },
		{ id: 3, message: 'Чем занимаешься?' },
	];

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
			</div>
			<div className={styles.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id} />
				<Message message={messagesData[1].message} id={messagesData[1].id} />
				<Message message={messagesData[2].message} id={messagesData[2].id} />
			</div>
		</div>
	)
}

export default Dialogs;
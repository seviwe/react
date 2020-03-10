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

	let dialogs = [
		{ id: 1, name: 'Дмитрий' },
		{ id: 2, name: 'Светлана' },
		{ id: 3, name: 'Женя' },
		{ id: 4, name: 'Андрей' },
		{ id: 5, name: 'Александр' },
		{ id: 6, name: 'Мария' }
	];

	let messages = [
		{ id: 1, message: 'Привет!' },
		{ id: 2, message: 'Как дела?' },
		{ id: 3, message: 'Чем занимаешься?' },
	];

	let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElement = messages.map(m => <Message message={m.message} id={m.id} />)

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={styles.messages}>
				{messagesElement}
			</div>
		</div>
	)
}

export default Dialogs;
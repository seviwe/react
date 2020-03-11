import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogs = props.dialogs;
	let messages = props.messages;

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
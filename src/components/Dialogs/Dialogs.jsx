import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

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
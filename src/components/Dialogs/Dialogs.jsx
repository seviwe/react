import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

	let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
	let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	const onMessageChange = (event) => {
		props.dispatch(updateNewMessageTextActionCreator(event.target.value));
	};

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems + " " + styles.border}>
				{dialogsElement}
			</div>
			<div className={styles.messages}>
				<div className={styles.border}>
					{messagesElement}
				</div>
				<div className={styles.sendMessage + ' ' + styles.border}>
					<textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
					<button onClick={addMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
	let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

	let addMessage = () => {
		props.addMessage(); //вызов функции из state.js для отрисовки сообщения
	}

	const onMessageChange = (event) => {
		props.updateNewMessageText(event.target.value); //вызов функции для занесения в state каждый символ при наборе текста в textarea 
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
					<textarea onChange={onMessageChange} value={props.newMessageText} />
					<button onClick={addMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
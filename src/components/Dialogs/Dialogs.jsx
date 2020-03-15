import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
	let messagesElement = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems + " " + styles.border}>
				{dialogsElement}
			</div>
			<div className={styles.messages + " " + styles.border}>
				{messagesElement}
				<div className={styles.sendMessage}> 
					<textarea placeholder="Введите сообщение"></textarea>
					<button>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
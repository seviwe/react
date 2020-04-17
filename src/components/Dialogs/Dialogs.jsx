import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

const Dialogs = (props) => {

	let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} imgSrc={d.imgSrc} />);
	let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

	let onAddMessage = () => {
		props.addMessage();
	}

	const onMessageChange = (event) => {
		props.updateNewMessageText(event.target.value);
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
					<TextField
						id="outlined-multiline-static"
						label="Введите сообщение..."
						multiline
						variant="outlined"
						onChange={onMessageChange} 
						value={props.dialogsPage.newMessageText}
						className={styles.textArea}
					/>
					<Button variant="contained" size="medium" color="primary" style={{marginTop: '10px'}} endIcon={<Icon>send</Icon>} onClick={onAddMessage}>Отправить</Button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
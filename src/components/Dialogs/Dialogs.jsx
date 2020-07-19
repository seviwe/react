import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
//import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {

	let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} imgSrc={d.imgSrc} />);
	let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

	let addNewMessage = (values) => {
		props.addMessage(values.newMessageBody);
	}

	//редирект на форму логина
	if (!props.isAuth) return <Redirect to={"/login"} />;

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
					<AddMessageReduxForm onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
	)
}

const DialogForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			{/* <TextField
				id="outlined-multiline-static"
				label="Введите сообщение..."
				multiline
				variant="outlined"
				onChange={onMessageChange}
				value={props.dialogsPage.newMessageText}
				className={styles.textArea}
			/> */}
			{/* <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px' }} endIcon={<Icon>send</Icon>} onClick={onAddMessage}>Отправить</Button> */}

			<Field component={"textarea"} cols={"75"} name={"newMessageBody"} placeholder={"Введите сообщение..."} />
			<div>
				{/* <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px' }} endIcon={<Icon>send</Icon>}>Отправить</Button> */}
				<button>Отправить</button>
			</div>
		</form>
	);
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(DialogForm);

export default Dialogs;
import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { FormControl, renderTextField } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength = maxLengthCreator(300);

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
			{/* <Field component={FormControl} controlType="textarea" className={styles.textAreaWidthAuto} name={"newMessageBody"} placeholder={"Введите сообщение..."} validate={[required, maxLength]} /> */}
			<Field component={renderTextField} className={styles.textAreaWidthAuto} name={"newMessageBody"} label={"Введите сообщение..."} validate={[required, maxLength]} />
			<div >
				{/* <Button variant="contained" size="medium" color="primary" style={{ marginTop: '10px' }} endIcon={<Icon>send</Icon>}>Отправить</Button> */}
				<button>Отправить</button>
			</div>
		</form>
	);
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(DialogForm);

export default Dialogs;
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	
	let state = props.store.getState().dialogsPage;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	const onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	};

	return (
		<Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} />
	)
}

export default DialogsContainer;
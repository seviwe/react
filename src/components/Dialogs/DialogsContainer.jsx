import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().dialogsPage;

					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}
				
					const onMessageChange = (text) => {
						store.dispatch(updateNewMessageTextActionCreator(text));
					};

					return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} />
				}
			}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer;
import { addMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

//connect()() вызов функции connect, а потом вызов того, что она вернула
const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(Dialogs);

export default DialogsContainer;
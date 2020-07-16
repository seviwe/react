import { addMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

//connect()() вызов функции connect, а потом вызов того, что она вернула
const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText })(AuthRedirectComponent);

export default DialogsContainer;
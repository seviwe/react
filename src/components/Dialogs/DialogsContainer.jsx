import { addMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

//compose()() вызов компонент (Снизу вверх): Dialogs -> withAuthRedirect -> connect()(), т.е. как матрешка, 
//главная компонента Dialogs накрывается новым слоем контейнерных компонент, указанных в compose(ЗДЕСЬ)(ГЛАВНАЯ КОМПНЕНТА)
export default compose(
	connect(mapStateToProps, { addMessage, updateNewMessageText }), //connect()() вызов функции connect, а потом вызов того, что она вернула
	withAuthRedirect
)(Dialogs);
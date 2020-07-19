import { authUser } from '../../redux/authReducer';
import Login from './Login';
import { connect } from 'react-redux';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		//login: state.auth.login,
		//password: state.auth.password,
	}
}

//compose()() вызов компонент (Снизу вверх): Dialogs -> withAuthRedirect -> connect()(), т.е. как матрешка, 
//главная компонента Dialogs накрывается новым слоем контейнерных компонент, указанных в compose(ЗДЕСЬ)(ГЛАВНАЯ КОМПНЕНТА)
export default compose(
	connect(mapStateToProps, { authUser }), //connect()() вызов функции connect, а потом вызов того, что она вернула
	/*withAuthRedirect*/
)(Login);
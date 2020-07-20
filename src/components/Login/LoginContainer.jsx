import { authUser } from '../../redux/authReducer';
import Login from './Login';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

//главная компонента Dialogs накрывается новым слоем контейнерных компонент, указанных в compose(ЗДЕСЬ)(ГЛАВНАЯ КОМПНЕНТА)
export default connect(mapStateToProps, { authUser })(Login);
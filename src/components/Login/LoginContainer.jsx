import { authUser } from '../../redux/authReducer';
import Login from './Login';
import { connect } from 'react-redux';
import { getIsAuth, getCaptchaUrl } from './../../selectors/authSelectors';

let mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state),
		captchaUrl: getCaptchaUrl(state),
	}
}

//главная компонента Dialogs накрывается новым слоем контейнерных компонент, указанных в compose(ЗДЕСЬ)(ГЛАВНАЯ КОМПНЕНТА)
export default connect(mapStateToProps, { authUser })(Login);
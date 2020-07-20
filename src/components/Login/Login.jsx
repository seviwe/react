import React from 'react';
import styles from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { FormControl } from '../../components/common/FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';

const maxLength = maxLengthCreator(30);

const Login = (props) => {
	let AuthNewUser = (values) => {
		props.authUser(values.login, values.password, values.rememberMe);
	}

	if(props.isAuth){ //если пользователь залогинен
		return <Redirect to={"/profile"}/>
	}

	return (
		<div>
			<h1>Авторизация</h1>
			<LoginReduxForm onSubmit={AuthNewUser} />
		</div>
	)
}

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"Логин"} name={"login"} component={FormControl} controlType="input" validate={[required, maxLength]} />
			</div>
			<div>
				<Field placeholder={"Пароль"} name={"password"} component={FormControl} type={"password"} controlType="input" validate={[required, maxLength]} />
			</div>
			<div>
				<Field type={"checkbox"} component={"input"} name={"rememberMe"} /> Запомнить меня
			</div>
			<div>
				<button>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;
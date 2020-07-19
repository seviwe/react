import React from 'react';
import styles from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const Login = (props) => {
	let AuthNewUser = (values) => {
		//props.authUser(values.login, values.password);
	}
	console.log(props);
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
				<Field placeholder={"Логин"} name={"login"} component={"input"} />
			</div>
			<div>
				<Field placeholder={"Пароль"} name={"password"} component={"input"} />
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberMe"} component={"input"} /> Запомнить меня
			</div>
			<div>
				<button>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;
import React from 'react';
import styles from './Login.module.css';
//import styles from '../common/FormsControls/FormsControls.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { FormControl, createField } from '../../components/common/FormsControls/FormsControls';
import { Redirect } from 'react-router-dom';

const maxLength = maxLengthCreator(30);

const Login = ({ isAuth, authUser }) => {
	let AuthNewUser = (values) => {
		authUser(values.login, values.password, values.rememberMe);
	}

	if (isAuth) { //если пользователь залогинен
		return <Redirect to={"/profile"} />
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
			{createField("Логин", "login", [required, maxLength], FormControl, "input", "", props, "")}
			{createField("Пароль", "password", [required, maxLength], FormControl, "input", "password", props, "")}
			{/* <div>
				<Field placeholder={"Логин"} name={"login"} component={FormControl} controlType="input" validate={[required, maxLength]} />
			</div>
			 <div>
				<Field placeholder={"Пароль"} name={"password"} component={FormControl} type={"password"} controlType="input" validate={[required, maxLength]} />
			</div> */}
			<div>
				<Field type={"checkbox"} component={"input"} name={"rememberMe"} /> Запомнить меня
			</div>
			{/* Вывод ошибки при неправильной авторизации */}
			{props.error && <div className={styles.formError}>
				{props.error}
			</div>
			}
			<div>
				<button>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default Login;
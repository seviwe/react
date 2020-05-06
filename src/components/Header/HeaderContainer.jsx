import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        //this.props.toggleIsFetching(true); //отображение крутилки загрузки
        //запрос с сервера пользователей, где страница = 1, currentPage указывается в usersReducer
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) { //если залогинены
                let { id, email, login } = response.data.data;
                //this.props.toggleIsFetching(false); //отключить крутилку загрузки
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
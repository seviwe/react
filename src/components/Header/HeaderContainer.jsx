import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from './../../redux/authReducer';
import { getIsAuth, getLogin, getUserId } from './../../selectors/authSelectors';
import { getProfile, getAvatar } from './../../selectors/profileSelectors';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    userId: getUserId(state),
    //avaPhoto: getAvatar(state),
    profile: getProfile(state),
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
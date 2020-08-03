import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from './../../redux/authReducer';
import { getIsAuth, getLogin, getUserId, getPhoto } from './../../selectors/authSelectors';
import { getProfile } from './../../selectors/profileSelectors';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    userId: getUserId(state),
    profile: getProfile(state),
    photo: getPhoto(state),
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
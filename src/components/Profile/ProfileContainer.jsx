import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile, getStatus } from './../../selectors/profileSelectors';
import { getIsAuth, getUserId } from './../../selectors/authSelectors';

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        //отображение моего профиля //id 7836
        if (!userId) {
            userId = props.userId;
            if (!userId) props.history.push("/login"); //редирект на страницу авторизации
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [props.match.params.userId])

    return (
        <Profile {...props} isOwner={!props.match.params.userId} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} saveProfile={props.saveProfile} />
    )
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    userId: getUserId(state),
    isAuth: getIsAuth(state),
});

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }), withRouter)(ProfileContainer);
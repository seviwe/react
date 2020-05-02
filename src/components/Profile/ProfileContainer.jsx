import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        //запрос с сервера профиля пользователя
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let matStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(matStateToProps, { setUserProfile })(ProfileContainer);
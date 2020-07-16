import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 7836; //отображение моего профиля
        }

        this.props.getUserProfile(userId);
    }

    render() {
        //редирект на форму логина
        if (!this.props.isAuth) return <Redirect to={"/login"}/>;

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer); //закидывание данных из URL

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
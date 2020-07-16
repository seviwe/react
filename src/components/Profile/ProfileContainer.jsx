import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 7836; //отображение моего профиля
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer); //закидывание данных из URL

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
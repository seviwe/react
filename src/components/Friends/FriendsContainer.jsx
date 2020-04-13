import React from 'react';
import Friends from './Friends';
import '../../redux/friendsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		friendsPage: state.friendsPage
	}
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
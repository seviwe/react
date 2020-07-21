import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
// import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Navbar from './components/Navbar/Navbar';
import NavbarFriendsContainer from './components/NavbarFriends/NavbarFriendsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import { Route, withRouter } from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import FriendsContainer from './components/Friends/FriendsContainer';
import NavbarMusic from './components/NavbarMusic/NavbarMusic';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initApp();
	}

	render() {
		if (!this.props.init) return <Preloader />

		return (
			<div className="backColor">
				<div className='app-wrapper'>
					<HeaderContainer />
					{/* <BackgroundImage /> */}
					<Navbar />
					<NavbarFriendsContainer />
					<NavbarMusic />
					<div className="app-wrapper-content">
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/friends' render={() => <FriendsContainer />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/login' render={() => <LoginContainer />} />
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	init: state.app.init,
});

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
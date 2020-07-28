import React, { useEffect, Suspense } from 'react';
import { initApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter } from "react-router-dom";
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import NavbarFriendsContainer from './components/NavbarFriends/NavbarFriendsContainer';
import NavbarMusic from './components/NavbarMusic/NavbarMusic';
import Footer from './components/Footer/Footer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import News from './components/News/News';
//import Settings from './components/Settings/Settings';
//import Music from './components/Music/Music';
//import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import LoginContainer from './components/Login/LoginContainer';
//import FriendsContainer from './components/Friends/FriendsContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));

const App = (props) => {
	useEffect(() => {
		props.initApp();
	}, [])

	if (!props.init) return <Preloader />

	return (
		<div className="backColor">
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<NavbarFriendsContainer />
				<NavbarMusic />
				<div className="app-wrapper-content">
					<Suspense fallback={<Preloader />}>
						<Route path='/dialogs' render={() => <DialogsContainer />} />
						<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/friends' render={() => <FriendsContainer />} />
						<Route path='/users' render={() => <UsersContainer />} />
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/login' render={() => <LoginContainer />} />
					</Suspense>
				</div>
				<Footer />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	init: state.app.init
});

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
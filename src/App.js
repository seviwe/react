import React, { useEffect, Suspense } from 'react';
import { initApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import NavbarFriendsContainer from './components/NavbarFriends/NavbarFriendsContainer';
import NavbarMusic from './components/NavbarMusic/NavbarMusic';
import Footer from './components/Footer/Footer';

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
	}, [props.initApp])

	if (!props.init) return <Preloader />

	return (
		<div className="backColor">
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<NavbarFriendsContainer />
				<NavbarMusic />
				<div className="app-wrapper-content">
					<Switch>
						<Suspense fallback={<Preloader />}>
							<Route path='/' exact><Redirect to='/profile' /></Route>
							<Route path='/dialogs' render={() => <DialogsContainer />} />
							<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
							<Route path='/news' render={() => <News />} />
							<Route path='/music' render={() => <Music />} />
							<Route path='/friends' render={() => <FriendsContainer />} />
							<Route path='/users' render={() => <UsersContainer />} />
							<Route path='/settings' render={() => <Settings />} />
							<Route path='/login' render={() => <LoginContainer />} />
							{/* <Route path='*' render={() => <div><h1><b>404 NOT FOUND</b></h1></div>} /> */}
							<Route exact path='/' render={() => <ProfileContainer />} />
							<Route exact path='/react' render={() => <ProfileContainer />} />
						</Suspense>
					</Switch>
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
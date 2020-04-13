import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NavbarFriendsContainer from './components/NavbarFriends/NavbarFriendsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import FriendsContainer from './components/Friends/FriendsContainer';
import NavbarMusic from './components/NavbarMusic/NavbarMusic';

const App = (props) => {
	return (
		<div className="backColor">
			<div className='app-wrapper'>
				<Header />
				<BackgroundImage />
				<Navbar />
				<NavbarFriendsContainer />
				<NavbarMusic />
				<div className="app-wrapper-content">
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/friends' render={() => <FriendsContainer />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
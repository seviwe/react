import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NavbarFriends from './components/NavbarFriends/NavbarFriends';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Route } from "react-router-dom"
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import NavbarMusic from './components/NavbarMusic/NavbarMusic';
// import RightBlock from './components/RightBlock/RightBlock';

const App = (props) => {
	return (
		<div className="backColor">
			<div className='app-wrapper'>
				<Header />
				<BackgroundImage />
				<Navbar />
				<NavbarFriends state={props.state.friendsPage} />
				<NavbarMusic />
				<div className="app-wrapper-content">
					<Route path='/dialogs'	render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.state.dispatch} />} />
					<Route path='/profile' 	render={() => <Profile profilePage={props.state.profilePage} dispatch={props.state.dispatch} />} />
					<Route path='/news' 	render={() => <News />} />
					<Route path='/music' 	render={() => <Music />} />
					<Route path='/friends' 	render={() => <Friends state={props.state.friendsPage} />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

/* First commit from SEVA@HOME */

export default App;
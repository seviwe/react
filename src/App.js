import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NavbarFriends from './components/NavbarFriends/NavbarFriends';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from "react-router-dom"
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
				<NavbarFriends state={props.state.navbarFriends} />
				<NavbarMusic />
				<div className="app-wrapper-content">
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
					<Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />

					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/friends' component={Friends} />
					<Route path='/settings' component={Settings} />

					{/* <Route path='/profile' component={Profile} />
						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} /> */}
				</div>
				{/* <RightBlock /> */}
				<Footer />
			</div>
		</div>
	);
}

/* First commit from SEVA@HOME */

export default App;
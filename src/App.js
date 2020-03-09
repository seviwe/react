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
import RightBlock from './components/RightBlock/RightBlock';

const App = () => {
	return (
		<BrowserRouter>
			<div className="backColor">
				<div className='app-wrapper'>
					<Header />
					<BackgroundImage />
					<Navbar />
					<NavbarFriends />
					<div className="app-wrapper-content">
						<Route path='/dialogs' component={Dialogs} />
						<Route path='/profile' component={Profile} />
						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} />
					</div>
					<RightBlock />
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

/* First commit from SEVA@HOME */

export default App;
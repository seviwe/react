import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NavbarFriends from './components/NavbarFriends/NavbarFriends';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <BackgroundImage />
      <Navbar />
      <NavbarFriends />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
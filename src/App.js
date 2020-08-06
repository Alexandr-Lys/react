import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Music from './components/Music/Music.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
       <Header />
       <Navbar />
       <div className='app-wrapper-content'>
            <Route path='/dialogs'  render = {() => <DialogsContainer store={props.store}/>} />
            <Route path='/profile'  render = {() => <Profile />}/>
            <Route path='/news'     render = {News} />
            <Route path='/music'    render = {Music} />
            <Route path='/settings' render = {Settings} />
            <Route path='/users'    render = {() => <UsersContainer />} />
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

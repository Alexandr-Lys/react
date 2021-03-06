import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Music from './components/Music/Music.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
       <HeaderContainer />
       <Navbar />
       <div className='app-wrapper-content'>
            <Route path='/dialogs'  render = {() => <DialogsContainer store={props.store}/>} />
            <Route path='/profile/:userId?'  render = {() => <ProfileContainer />}/>
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

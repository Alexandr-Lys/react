import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Music from './components/Music/Music.jsx';
import MyPosts from './components/Profile//MyPosts/MyPosts.jsx';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
       <Header />
       <Navbar />
       <div className='app-wrapper-content'>
            <Route path='/dialogs'  render = {() => <Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/profile'  render = {() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path='/news'     render = {News} />
            <Route path='/music'    render = {Music} />
            <Route path='/settings' render = {Settings} />
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

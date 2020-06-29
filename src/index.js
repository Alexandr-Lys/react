import * as serviceWorker from './serviceWorker';
import state from './redux/State.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/State.js';
import {subscribe} from './redux/State.js';
import {BrowserRouter, Route} from "react-router-dom";


let renderEntireTree = (states) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}



renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

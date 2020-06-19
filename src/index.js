import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyPosts from './components/Profile//MyPosts/MyPosts.jsx';

let messages=[
	{message: 'Hi', id: 1},
	{message: 'How', id: 2},
	{message: 'Yo', id: 3},
]


let dialogs=[
	{id:1, name: 'Vasya'},
	{id:2, name: 'Masha'},
	{id:3, name: 'Asya'},
]


let posts=[
    {id: 0, message:'Hi, how are you?', likeCount:'30'},
    {id: 1, message:'Its my first post', likeCount:'20'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

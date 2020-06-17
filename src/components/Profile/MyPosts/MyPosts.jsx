import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let messageData=[
	{id: 0, message:'Hi, how are you?', likeCount:'30'},
	{id: 1, message:'Its my first post', likeCount:'20'}
]


const MyPosts = () => {
return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div><button>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
                <Post message={messageData[0].message} likeCount={messageData[0].likeCount}/>
                <Post message={messageData[1].message} likeCount={messageData[1].likeCount}/>
            </div>
        </div>

}
export default MyPosts;

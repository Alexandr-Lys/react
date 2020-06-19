import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let posts=[
	{id: 0, message:'Hi, how are you?', likeCount:'30'},
	{id: 1, message:'Its my first post', likeCount:'20'}
]

let postsElement = posts.map (p => <Post message = {p.message} likeCount = {p.likeCount}/> );

const MyPosts = () => {
return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div><button>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
				{postsElement}
            </div>
        </div>

}
export default MyPosts;

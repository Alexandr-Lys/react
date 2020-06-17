import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
const MyPosts = () => {
return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div><button>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likeCount='30' />
                <Post message="It's my first post" likeCount='20' />
            </div>
        </div>

}
export default MyPosts;

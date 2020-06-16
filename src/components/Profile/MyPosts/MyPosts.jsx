import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
const MyPosts = () => {
return  <div>My posts
            <div>
                <textarea></textarea>
                <button>ADD POST</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likeCount='30' />
                <Post message="It's my first post" likeCount='20' />
            </div>
        </div>

}
export default MyPosts;

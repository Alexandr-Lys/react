import React from 'react';
import classes from './MyPosts.module.css';
const MyPosts = () => {
return  <div className={classes.posts}>My posts<div>New post</div>
        <div className={classes.item}>post1</div>
        <div className={classes.item}>post2</div>
        </div>

}

export default MyPosts;

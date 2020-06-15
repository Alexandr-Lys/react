import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
return  <div className={classes.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' /> {props.message}
            <div><span>{props.likeCount} LIKES</span></div>
        </div>
}
export default Post;

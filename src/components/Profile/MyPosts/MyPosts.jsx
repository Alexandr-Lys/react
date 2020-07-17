import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let postsElement =
        props.posts.map (p => <Post message = {p.message} likeCount = {p.likeCount}/> );
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <div><button onClick={onAddPost}>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
				{postsElement}
            </div>
        </div>
};
export default MyPosts;

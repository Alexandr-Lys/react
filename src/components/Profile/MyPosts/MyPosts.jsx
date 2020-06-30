import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

let updateNewPostActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

let postsElement = props.posts.map (p => <Post message = {p.message} likeCount = {p.likeCount}/> );

let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
}

return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <div><button onClick={addPost}>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
				{postsElement}
            </div>
        </div>
}
export default MyPosts;

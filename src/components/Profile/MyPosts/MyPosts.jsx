import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }

let postsElement = props.posts.map (p => <Post message = {p.message} likeCount = {p.likeCount}/> );

return  <div className={classes.postBlock}><h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div><button onClick={addPost}>ADD POST</button></div>
            </div>
            <div className={classes.posts}>
				{postsElement}
            </div>
        </div>
}
export default MyPosts;

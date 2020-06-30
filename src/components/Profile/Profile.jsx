import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {



return  <div className={classes.content}>
        <ProfileInfo />
        <MyPosts
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        dispatch={props.dispatch}/>
        </div>

    }

export default Profile;

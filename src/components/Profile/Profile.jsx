import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
return  <div className={classes.content}>
        <ProfileInfo profile = {props.profile}/>
        <MyPostsContainer profile = {props.profile}/>
        </div>
    };

export default Profile;

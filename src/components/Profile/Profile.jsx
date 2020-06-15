import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
return  <div className={classes.content}>
        <div>
        <img src='https://png.pngtree.com/thumb_back/fw800/back_pic/03/93/99/8257e7bbd63b3ff.jpg'/>
        </div>
        <div>ava+decription</div>
        <MyPosts />
        </div>

    }

export default Profile;

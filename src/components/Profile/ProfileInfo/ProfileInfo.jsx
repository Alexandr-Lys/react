import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
return  <div>
            <div><img src='https://png.pngtree.com/thumb_back/fw800/back_pic/03/93/99/8257e7bbd63b3ff.jpg'/></div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h1>{props.profile.fullName}</h1>
                <div>{props.profile.aboutMe}</div>
                <div>Работа: {props.profile.lookingForAJobDescription}</div>
                <div> Контакты: </div></div>
        </div>

    }

export default ProfileInfo;

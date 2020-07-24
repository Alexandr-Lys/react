import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0){
    props.setUsers([
        {id: 0, photoUrl: 'https://cdna.artstation.com/p/assets/images/images/003/630/638/20161006165157/smaller_square/dmitry-kremiansky-combined.jpg?1475790718',
            followed: false, fullName:'Dimitry', status:'am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 1, photoUrl: 'https://cdna.artstation.com/p/assets/images/images/003/630/638/20161006165157/smaller_square/dmitry-kremiansky-combined.jpg?1475790718',
            followed: true,fullName:'Eva', status:'am a girl', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, photoUrl: 'https://cdna.artstation.com/p/assets/images/images/003/630/638/20161006165157/smaller_square/dmitry-kremiansky-combined.jpg?1475790718',
            followed: false,fullName:'Liza', status:'be cool', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://cdna.artstation.com/p/assets/images/images/003/630/638/20161006165157/smaller_square/dmitry-kremiansky-combined.jpg?1475790718',
            followed: true,fullName:'Kolya', status:'hello world!', location: {city: 'Rall', country: 'Gucchi'}}
        ]);}

    return <div>
        {
            props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photoUrl} className = {styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick = {() => {props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick = {() => {props.follow(u.id)}}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>


            )
        }

    </div>
}

export default Users;
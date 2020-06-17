import React from 'react';
import classes from './Dialogs.module.css';

import {NavLink, BrowserRouter, Route} from "react-router-dom";

let dialogsData=[
	{id:1, name: 'Vasya'},
	{id:2, name: 'Masha'},
	{id:3, name: 'Asya'},
]

let messageData=[
	{message: 'Hi', id: 0},
	{message: 'How', id: 1},
	{message: 'Yo', id: 2},
]




const DialogItem = (props) =>{
	return (
		<div className={classes.dialog}>
		<NavLink to={"/dialogs/"+ props.id} activeClassName={classes.active}>{props.name}</NavLink></div>
	)
}

const Message = (props) =>{
	return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) =>{
	return (
	<div className={classes.dialogs}>
		<div className={classes.dialogsUsers}>
			<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
			<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
			<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
		</div>

		<div className={classes.dialogsMessages}>
			<Message message={messageData[0].message} id={messageData[0].id}/>
			<Message message={messageData[1].message} id={messageData[1].id}/>
			<Message message={messageData[2].message} id={messageData[2].id}/>
		</div>

	</div>
 )
}
export default Dialogs;

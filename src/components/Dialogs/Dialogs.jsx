import React from 'react';
import classes from './Dialogs.module.css';

import {NavLink, BrowserRouter, Route} from "react-router-dom";


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
			<DialogItem name="Vasya" id="1"/>
			<DialogItem name="Masha" id="2"/>
			<DialogItem name="Dasha" id="3"/>
		</div>

		<div className={classes.dialogsMessages}>
			<Message message="Hi"/>
			<Message message="Ho"/>
			<Message message="Yo"/>
		</div>

	</div>
 )
}
export default Dialogs;

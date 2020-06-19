import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import classes from './Dialogs.module.css';


let messages=[
	{message: 'Hi', id: 1},
	{message: 'How', id: 2},
	{message: 'Yo', id: 3},
]



let dialogs=[
	{id:1, name: 'Vasya'},
	{id:2, name: 'Masha'},
	{id:3, name: 'Asya'},
]

let messagesElements = messages.map(m => <MessageItem message={m.message} id={m.id}/>);
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

const Dialogs = (props) =>{
	return (
	<div className={classes.dialogs}>
		<div className={classes.dialogsUsers}>
			{dialogsElements}
		</div>

		<div className={classes.dialogsMessages}>
			{messagesElements}
		</div>

	</div>
 )
}
export default Dialogs;

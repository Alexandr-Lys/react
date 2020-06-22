import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import classes from './Dialogs.module.css';

const Dialogs = (props) =>{

let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id}/>);
let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

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

import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import classes from './Dialogs.module.css';

const Dialogs = (props) =>{
	let state = props.dialogsPage;
	let messagesElements = state.messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id}/>);
	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () => {
		props.sendMessage();
	};
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};
	return (
		<div className={classes.dialogs}>

			<div className={classes.dialogsUsers}>
				{dialogsElements}
			</div>

			<div className={classes.dialogsMessages}>
				<div>{messagesElements}</div>
				<div>
					<textarea placeholder='ENTER YOUR MESSAGE' onChange={onNewMessageChange}  value={newMessageBody}></textarea>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>


		</div>
 	)
}
export default Dialogs;

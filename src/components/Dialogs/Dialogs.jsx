import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import classes from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/State';

const Dialogs = (props) =>{
let state = props.store.getState().dialogsPage;

let messagesElements = state.messages.map(m => <MessageItem message={m.message} id={m.id}/>);
let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

	let newMessageBody = state.newMessageBody;



	let onSendMessageClick = () => {
		props.dispatch(sendMessageCreator());
	};
	let onMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};
	return (
		<div className={classes.dialogs}>

			<div className={classes.dialogsUsers}>
				{dialogsElements}
			</div>

			<div className={classes.dialogsMessages}>
				<div>{messagesElements}</div>
				<div>
					<textarea placeholder='ENTER YOUR MESSAGE' onChange={onMessageChange}  value={newMessageBody}></textarea>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>


		</div>
 	)
}
export default Dialogs;

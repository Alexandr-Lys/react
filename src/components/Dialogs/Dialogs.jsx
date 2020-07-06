import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import classes from './Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/State';

const Dialogs = (props) =>{

let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id}/>);
let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let newMessage = React.createRef();

	let sendMessage = () => {
		props.dispatch(addMessageActionCreator());
	};
	let onMessageChange = () => {
		let text = newMessage.current.value;
		let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
		props.dispatch(action);
	};
	return (
		<div className={classes.dialogs}>

			<div className={classes.dialogsUsers}>
				{dialogsElements}
			</div>

			<div className={classes.dialogsMessages}>
				{messagesElements}
				<div>
					<textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
					<div><button onClick={sendMessage}>Send</button></div>
				</div>
			</div>


		</div>
 	)
}
export default Dialogs;

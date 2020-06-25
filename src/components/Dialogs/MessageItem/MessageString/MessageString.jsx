import React from 'react';
let newMessage = React.createRef();

let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
}

const MessageString = () => {
	return(
			<div>
				<textarea ref={newMessage}></textarea>
				<div><button onClick={sendMessage}>Send</button></div>
			</div>
	)
}

export default MessageString;

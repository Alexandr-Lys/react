import React from 'react';
import classes from './../Dialogs.module.css';


const MessageItem = (props) => {
	return(
		<div>
			<div>
				<div className={classes.message}>{props.message}</div>

			</div>

		</div>
	)
}

export default MessageItem;

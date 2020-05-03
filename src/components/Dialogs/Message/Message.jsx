import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
	return (
		<div className={styles.message + " " + styles.border}>
			{props.message}
		</div>
	)
}

export default Message;
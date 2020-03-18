import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

	let friendsElement = props.state.friends.map(f => <Friend name={f.name} surname={f.surname} id={f.id} imgSrc={f.imgSrc} />);

	return (
		<div>
			<div className={styles.panel}>
				Здесь что-то будет...
			</div>
			<div className={styles.listFriends}>
				{friendsElement}
			</div>
		</div>
	)
}

export default Friends;
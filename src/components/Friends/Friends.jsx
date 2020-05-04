import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

	let friendsElement = props.friendsPage.map(f => <Friend name={f.name} surname={f.surname} id={f.id} imgSrc={f.imgSrc} status={f.status} country={f.location.country} city={f.location.city} />);

	return (
		<div>
			<div className={styles.panel}>
				Поиск друзей...
			</div>
			{friendsElement}
		</div>
	)
}

export default Friends;
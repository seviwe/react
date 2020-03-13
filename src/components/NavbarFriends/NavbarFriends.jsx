import React from 'react';
import styles from './NavbarFriends.module.css';
import Friend from './Friend/Friend';

const NavbarFriends = (props) => {

	let friendsElement = props.state.friends.map(f => <Friend name={f.name} id={f.id} imgSrc={f.imgSrc} />);

	return (
		<div className={styles.navfriends}>
			Friends
			<div className={styles.navfriendsGrid}>
				{friendsElement}
			</div>
		</div>
	)
}

export default NavbarFriends;
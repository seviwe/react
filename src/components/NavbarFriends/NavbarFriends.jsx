import React from 'react';
import styles from './NavbarFriends.module.css';
import Friend from './Friend/Friend';

const NavbarFriends = (props) => {

	let friendsElement = props.friendsPage.map(f => <Friend name={f.name} key={f.id} id={f.id} imgSrc={f.imgSrc} />);

	return (
		<div className={styles.navfriends}>
			Friends <span className={styles.quantityFriends}>{props.friendsPage.length}</span>
			<div className={styles.navfriendsGrid}>
				{friendsElement}
			</div>
		</div>
	)
}

export default NavbarFriends;
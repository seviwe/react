import React from 'react';
//import styles from './Settings.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const Settings = (props) => {
	return (
		<div>
			Settings
		</div>
	)
}

export default compose(withAuthRedirect)(Settings);
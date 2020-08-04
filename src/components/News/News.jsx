import React from 'react';
//import styles from './News.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const News = (props) => {
	return (
		<div>
			News
		</div>
	)
}

export default compose(withAuthRedirect)(News);
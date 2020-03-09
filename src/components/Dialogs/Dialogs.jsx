import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog + ' ' + styles.active}>
					Дмитрий
				</div>
				<div className={styles.dialog}>
					Светлана
				</div>
				<div className={styles.dialog}>
					Женя
				</div>
				<div className={styles.dialog}>
					Андрей
				</div>
				<div className={styles.dialog}>
					Александр
				</div>
				<div className={styles.dialog}>
					Мария
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>Привет!</div>
				<div className={styles.message}>Как дела?</div>
				<div className={styles.message}>Чем занимаешься?</div>
			</div>
		</div>
	)
}

export default Dialogs;